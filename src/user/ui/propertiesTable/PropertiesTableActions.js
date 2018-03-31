import store from '../../../store'

const RestApiClient = require('node-rest-client').Client

export const RECEIVE_PROPERTIES = 'RECEIVE_PROPERTIES'
function receiveProperties(propertiesData) {
  return {
    type: RECEIVE_PROPERTIES,
    payload: propertiesData
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
