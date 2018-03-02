const initialState = {
  inTransactions: [],
  outTransactions: [],
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
    return Object.assign({}, state, action.payload)
  }

  if (action.type === 'UPDATE_BALANCE') {
    return Object.assign({}, state, action.payload)
  }

  return state
}

export default userReducer
