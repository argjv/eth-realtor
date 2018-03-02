import store from '../../../store'

export const UPDATE_BALANCE = 'UPDATE_BALANCE'
function updateBalance(balance) {
  return {
    type: UPDATE_BALANCE,
    payload: balance
  }
}

export function getBalance(coinbase) {
    let web3 = store.getState().web3.web3Instance
    console.log('coinbase: ', coinbase)
    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {
        web3.eth.getAccounts((error, accounts) => {console.log(accounts)})
        return function(dispatch) {
            web3.eth.getBalance(coinbase, (error, balance) => {
                if (error) {
                    console.error(error);
                }
                dispatch(updateBalance({
                    balance: balance.toNumber()
                }))
            })
        }
    } else {
        console.log('Error getting users balance')
    }
}