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

export function addProperty(propertyData) {
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
          console.log('Add property logic goes here');
          return dispatch(addNewProperty(propertyData))
        })
      })
    }
  } else {
    console.error('Web3 is not initialized.');
  }
}
