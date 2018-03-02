import RealtorTokenContract from '../../../../build/contracts/RealtorToken.json'
import store from '../../../store'

const contract = require('truffle-contract')

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
        web3.eth.getAccounts((error, accounts) => {
            console.log(accounts)
            const realtorToken = contract(RealtorTokenContract)
            realtorToken.setProvider(web3.currentProvider)
            var realtorTokenInstance
            accounts.forEach(address => {
                realtorToken.deployed().then(function(instance) {
                    realtorTokenInstance = instance;
                    console.log('address: ', address)
                    
                    return realtorTokenInstance.balanceOf(address)
                }).then(function(result) {
                    console.log('result: ', result)
                }).catch(function(result) {
                    console.error(result);
                })
            });
        })
        return function(dispatch) {
            const realtorToken = contract(RealtorTokenContract)
            realtorToken.setProvider(web3.currentProvider)

            var realtorTokenInstance
            
            realtorToken.deployed().then(function(instance) {
                realtorTokenInstance = instance;
                console.log('coinbase: ', coinbase)
                
                return realtorTokenInstance.balanceOf(coinbase)
            }).then(function(result) {
                console.log(result)
                dispatch(updateBalance({
                    balance: result.c[0]
                }))
            }).catch(function(result) {
                console.error(result);
            })
            // web3.eth.getBalance(coinbase, (error, balance) => {
            //     if (error) {
            //         console.error(error);
            //     }
            //     dispatch(updateBalance({
            //         balance: balance.toNumber()
            //     }))
            // })
        }
    } else {
        console.log('Error getting users balance')
    }
}