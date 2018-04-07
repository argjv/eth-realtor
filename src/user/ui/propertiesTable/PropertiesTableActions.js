import RealtorTokenContract from '../../../../build/contracts/RealtorToken.json'
import store from '../../../store'

const RestApiClient = require('node-rest-client').Client
const contract = require('truffle-contract')

export const RECEIVE_PROPERTIES = 'RECEIVE_PROPERTIES'
function receiveProperties(propertiesData) {
  return {
    type: RECEIVE_PROPERTIES,
    payload: propertiesData
  }
}

export const PUBLISH_PROPERTIES = 'PUBLISH_PROPERTIES'
function publishProperties() {
  return {
    type: PUBLISH_PROPERTIES
  }
}

export function getProperties() {
  let web3 = store.getState().web3.web3Instance
  if (typeof web3 !== 'undefined') {
    return function(dispatch) {
      // Get current address
      web3.eth.getCoinbase((error, coinbase) => {
        if (error) {
          console.error(error);
        }

        console.log('Fetching properties owned by ', coinbase);
        let restApiClient = new RestApiClient();
        let args = {
          parameters: {
            owner: coinbase
          },
          headers: { "Content-Type": "application/json" }
        };
        restApiClient.get('http://localhost:3000/properties', args, function (data, response) {
          // TODO: Show a message confirming the property was registered successfully
          console.log(data);
          return dispatch(receiveProperties({properties: data}))
        })
      })
    }
  } else {
    console.error('Web3 is not initialized.');
  }
}

export function publishProperty(id) {
  let web3 = store.getState().web3.web3Instance
  if (typeof web3 !== 'undefined') {
    return function(dispatch) {
      console.log("About to publish house with ID:", id);
      const realtorToken = contract(RealtorTokenContract)
      realtorToken.setProvider(web3.currentProvider)

      let realtorTokenInstance

      realtorToken.deployed().then(function(instance) {
          realtorTokenInstance = instance;
          return realtorTokenInstance.publish(id, {from: store.getState().user.coinbase});
      }).then(function(result) {
          alert('Property published in the blockchain!');
          console.log("result: ", result)
          let restApiClient = new RestApiClient();
          let args = {
            data: {
              status: 1
            },
            headers: { "Content-Type": "application/json" }
          };
          restApiClient.put('http://localhost:3000/properties/' + id, args, function (data, response) {
            // TODO: Show a message confirming the property was registered successfully
            console.log(data);
            return dispatch(publishProperties())
          })
      }).catch(function(err) {
          console.log(err.message);
      });

    }
  } else {
    console.error('Web3 is not initialized.');
  }
}