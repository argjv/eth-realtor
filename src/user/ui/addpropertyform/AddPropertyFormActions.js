import RealtorContract from '../../../../build/contracts/RealtorToken.json'
import store from '../../../store'
import { browserHistory } from 'react-router'

const contract = require('truffle-contract')
const RestApiClient = require('node-rest-client').Client

export const ADD_PROPERTY = 'ADD_PROPERTY'
function addNewProperty(propertyData) {
  return {
    type: ADD_PROPERTY,
    payload: propertyData
  }
}

export function addProperty(propertyData) {
  let web3 = store.getState().web3.web3Instance
  if (typeof web3 !== 'undefined') {
    return function (dispatch) {
      const realtor = contract(RealtorContract);
      realtor.setProvider(web3.currentProvider);
      let realtorInstance;

      web3.eth.getCoinbase((error, coinbase) => {
        if (error) {
          console.error(error);
        }

        realtor.deployed().then(function (instance) {
          realtorInstance = instance;
          // TODO: build a hash to use as a property id
          let hash = web3.sha3(JSON.stringify(propertyData));
          console.log('Adding property: ', propertyData.address1, 'under address: ', coinbase, 'with hash:', hash);
          realtorInstance.registerProperty(hash, propertyData.price, { from: coinbase })
            .then(function (result) {
              alert('Property succesfully added!');
              console.log("result: ", result);
              // If the property was added to the blockchain, add the extra info to our database
              Object.assign(propertyData, {
                owner: coinbase,
                ethid: hash,
                status: 0
              });
              let restApiClient = new RestApiClient();
              let args = {
                data: propertyData,
                headers: { "Content-Type": "application/json" }
              };
              restApiClient.post('http://localhost:3000/properties', args, function (data, response) {
                // TODO: Show a message confirming the property was registered successfully
                console.log(data);
              })
              dispatch(addNewProperty(propertyData));
              return browserHistory.push('/dashboard');
            })
            .catch(function (result) {
              console.log(result);
            })
        })
      })
    }
  } else {
    console.error('Web3 is not initialized.');
  }
}
