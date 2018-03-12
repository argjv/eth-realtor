import RealtorContract from '../../../../build/contracts/RealtorToken.json'
import store from '../../../store'

const contract = require('truffle-contract')

export const USER_UPDATED = 'USER_UPDATED'
function userUpdated(user) {
  return {
    type: USER_UPDATED,
    payload: user
  }
}

export function updateUser(name) {
  let web3 = store.getState().web3.web3Instance

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {

    return function(dispatch) {
      const realtor = contract(RealtorContract);
      realtor.setProvider(web3.currentProvider);
      let realtorInstance;

      // Get current ethereum wallet.
      web3.eth.getCoinbase((error, coinbase) => {
        // Log errors, if any.
        if (error) {
          console.error(error);
        }

        realtor.deployed().then(function(instance) {
          realtorInstance = instance

          realtorInstance.update(name, {from: coinbase})
          .then(function(result) {
            dispatch(userUpdated({"name": name}))
            return alert('Name updated!')
          })
          .catch(function(result) {
            // If error...
          })
        })
      })
    }
  } else {
    console.error('Web3 is not initialized.');
  }
}
