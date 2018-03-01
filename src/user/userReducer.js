const initialState = {
  inTransactions: [],
  outTransactions: [],
  coinbase: '',
  name: ''
}

const userReducer = (state = initialState, action) => {
  if (action.type === 'USER_LOGGED_IN' || action.type === 'USER_UPDATED') {
    console.log("USER_LOGGED_IN or USER_UPDATED")
    return Object.assign({}, state, action.payload)
  }

  if (action.type === 'USER_LOGGED_OUT') {
    console.log("USER_LOGGED_OUT")
    return Object.assign({}, state, initialState)
  }

  if (action.type === 'TABLE_LOAD') {
    console.log("TABLE_LOAD")
    return Object.assign({}, state, action.payload)
  }

  return state
}

export default userReducer
