import RealtorTokenContract from '../../../../build/contracts/RealtorToken.json'
import store from '../../../store'

const RestApiClient = require('node-rest-client').Client
const contract = require('truffle-contract')

export const ACCEPT_OFFERS = 'ACCEPT_OFFERS'
function acceptOffers() {
  return {
    type: ACCEPT_OFFERS
  }
}

export function acceptOffer(owner) {
  let web3 = store.getState().web3.web3Instance
  if (typeof web3 !== 'undefined') {
    return function(dispatch) {
      console.log("About to accept offer from ", owner);
      const realtorToken = contract(RealtorTokenContract)
      realtorToken.setProvider(web3.currentProvider)

      let realtorTokenInstance

      realtorToken.deployed().then(function(instance) {
          realtorTokenInstance = instance;
          let propertyId;
          return realtorTokenInstance.acceptOffer(propertyId, owner, {from: store.getState().user.coinbase});
      }).then(function(result) {
          alert('Offer accepted!');
          console.log("result: ", result)
          let restApiClient = new RestApiClient();
          let args = {
            data: {
              status: 1
            },
            headers: { "Content-Type": "application/json" }
          };
          restApiClient.put('http://localhost:3000/offers/' + owner, args, function (data, response) {
            // TODO: Show a message confirming the property was registered successfully
            console.log(data);
            return dispatch(acceptOffers())
          })
      }).catch(function(err) {
          console.log(err.message);
      });
    }
  } else {
    console.error('Web3 is not initialized.');
  }
}
