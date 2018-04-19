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

export const SUBMIT_OFFERS = 'SUBMIT_OFFERS'
function submitOffers() {
    return {
        type: SUBMIT_OFFERS
    }
}

export function getAllProperties() {
    let web3 = store.getState().web3.web3Instance
    if (typeof web3 !== 'undefined') {
        return function (dispatch) {
            // Get current address
            web3.eth.getCoinbase((error, coinbase) => {
                if (error) {
                    console.error(error);
                }
                let restApiClient = new RestApiClient();
                let args = {
                    headers: { "Content-Type": "application/json" }
                };
                restApiClient.get('http://localhost:3000/properties', args, function (data, response) {
                    console.log(data);
                    return dispatch(receiveProperties({ properties: data }))
                })
            })
        }
    } else {
        console.error('Web3 is not initialized.');
    }
}

export function submitOffer(propertyId, offer) {
    let web3 = store.getState().web3.web3Instance
    if (typeof web3 !== 'undefined') {
        return function (dispatch) {
            console.log("Submitting an offer of ", offer, " RT for property", propertyId);
            const realtorToken = contract(RealtorTokenContract)
            realtorToken.setProvider(web3.currentProvider)

            let realtorTokenInstance;
            let coinbase = store.getState().user.coinbase;
            realtorToken.deployed().then(function (instance) {
                realtorTokenInstance = instance;
                console.log("Calling smar contract with coinbase", coinbase);
                return realtorTokenInstance.submitOffer(propertyId, offer, { from: coinbase });
            }).then(function (result) {
                alert('Offer submitted!');
                console.log("result: ", result)
                let restApiClient = new RestApiClient();
                let args = {
                    data: {
                        owner: coinbase,
                        offer: offer,
                        ethid: propertyId,
                        status: 0
                    },
                    headers: { "Content-Type": "application/json" }
                };
                restApiClient.post('http://localhost:3000/offers/', args, function (data, response) {
                    // TODO: Show a message confirming the property was registered successfully
                    console.log(data);
                    return dispatch(submitOffers())
                })
            }).catch(function (err) {
                console.log(err.message);
            });
        }
    } else {
        console.error('Web3 is not initialized.');
    }
}