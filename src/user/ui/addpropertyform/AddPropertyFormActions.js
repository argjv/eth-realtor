import RealtorContract from '../../../../build/contracts/RealtorToken.json'
import store from '../../../store'

const contract = require('truffle-contract')

export const ADD_PROPERTY = 'ADD_PROPERTY'
function addNewProperty(propertyData) {
  return {
    type: ADD_PROPERTY,
    payload: propertyData
  }
}

export function addProperty(propertyId) {
  let web3 = store.getState().web3.web3Instance
  if (typeof web3 !== 'undefined') {
    return function(dispatch) {
      const realtor = contract(RealtorContract);
      realtor.setProvider(web3.currentProvider);
      let realtorInstance;

      web3.eth.getCoinbase((error, coinbase) => {
        if (error) {
          console.error(error);
        }

        realtor.deployed().then(function(instance) {
          realtorInstance = instance;
          console.log('Adding property: ', propertyId, 'under address: ', coinbase);
          realtorInstance.registerProperty(propertyId, {from: coinbase})
          .then(function(result) {
            let propertyData = {
              address1: propertyId
            }
            return dispatch(addNewProperty(propertyData))
          })
          .catch(function(result) {
            console.log(result);
          })
        })
      })
    }
  } else {
    console.error('Web3 is not initialized.');
  }
}
