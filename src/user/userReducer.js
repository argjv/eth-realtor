const initialState = {
  inTransactions: [],
  outTransactions: [],
  tmpTransactions: [],
  properties: [],
  offers: [],
  transactionsLastBlockUpdate: 0,
  coinbase: '',
  name: '',
  balance: 0
}

const userReducer = (state = initialState, action) => {
  if (action.type === 'USER_LOGGED_IN' || action.type === 'USER_UPDATED') {
    return Object.assign({}, state, action.payload)
  }

  if (action.type === 'USER_LOGGED_OUT') {
    return Object.assign({}, state, initialState)
  }

  if (action.type === 'REQUEST_TRANSACTIONS') {
    return Object.assign({}, state, action.payload)
  }

  if (action.type === 'RECEIVE_TRANSACTIONS') {
    return Object.assign({}, state, {
      coinbase: action.payload.coinbase,
      inTransactions: state.inTransactions.concat(action.payload.inTransactions),
      outTransactions: state.outTransactions.concat(action.payload.outTransactions),
      transactionsLastBlockUpdate: action.payload.transactionsLastBlockUpdate
    })
  }

  if (action.type === 'PUBLISH_PROPERTIES' || action.type === 'RECEIVE_PROPERTIES') {
    return Object.assign({}, state, action.payload)
  }

  if (action.type === 'RECEIVE_OFFERS') {
    return Object.assign({}, state, action.payload)
  }

  if (action.type === 'UPDATE_BALANCE') {
    return Object.assign({}, state, action.payload)
  }

  if (action.type === 'TRANSFER_TOKENS') {
    return Object.assign({}, state, {
      tmpTransactions: [action.payload]
    })
  }

  return state
}

export default userReducer
