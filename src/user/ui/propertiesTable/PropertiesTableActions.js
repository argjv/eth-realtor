import store from '../../../store'

const contract = require('truffle-contract')
const RestApiClient = require('node-rest-client').Client

export const RECEIVE_PROPERTIES = 'RECEIVE_PROPERTIES'
function requestProperties(propertiesData) {
  return {
    type: RECEIVE_PROPERTIES,
    payload: propertiesData
  }
}

export function getProperties() {}
