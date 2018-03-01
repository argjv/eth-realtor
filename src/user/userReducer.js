const initialState = {
  inTransactions: [],
  outTransactions: [],
  coinbase: '',
  name: ''
}

const userReducer = (state = initialState, action) => {
  if (action.type === 'USER_LOGGED_IN' || action.type === 'USER_UPDATED') {
    return Object.assign({}, state, action.payload)
  }

  if (action.type === 'USER_LOGGED_OUT') {
    return Object.assign({}, state, initialState)
  }

  if (action.type === 'REQUEST_TRANSACTIONS') {
    console.log("REQUEST_TRANSACTIONS: ", Object.assign({}, state, action.payload))
    return Object.assign({}, state, action.payload)
  }

  if (action.type === 'RECEIVE_TRANSACTIONS') {
    console.log("RECEIVE_TRANSACTIONS: ",Object.assign({}, state, action.payload))
    return Object.assign({}, state, {
      inTransactions: action.payload.inTransactions,
      outTransactions: action.payload.outTransactions
    })
  }

  return state
}

export default userReducer
