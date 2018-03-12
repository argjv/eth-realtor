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

export const TRANSFER_TOKENS = 'TRANSFER_TOKENS'
function transferTokens(transferData) {
  return {
    type: TRANSFER_TOKENS,
    payload: transferData
  }
}

export function getBalance(coinbase) {
    let web3 = store.getState().web3.web3Instance
    console.log('coinbase: ', coinbase)
    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {
        return function(dispatch) {
            const realtorToken = contract(RealtorTokenContract)
            realtorToken.setProvider(web3.currentProvider)
            var realtorTokenInstance
            realtorToken.deployed().then(function(instance) {
                realtorTokenInstance = instance;
                return realtorTokenInstance.balanceOf(coinbase)
            }).then(function(result) {
                dispatch(updateBalance({
                    balance: result.c[0]
                }))
            }).catch(function(result) {
                console.error(result);
            })
        }
    } else {
        console.log('Error getting users balance')
    }
}

export function transfer(toAddress, amount) {
    let web3 = store.getState().web3.web3Instance
    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {
        return function(dispatch) {
            web3.eth.getAccounts(function(error, accounts) {
                if (error) {
                  console.log(error);
                }
                let fromAddress = accounts[0];
                console.log("accounts", accounts)

                console.log(store.getState().user.coinbase)
                console.log("Transfering " + amount + " RT from " + fromAddress + " to " + toAddress);

                const realtorToken = contract(RealtorTokenContract)
                realtorToken.setProvider(web3.currentProvider)

                let realtorTokenInstance
                
                realtorToken.deployed().then(function(instance) {
                    realtorTokenInstance = instance;
                    console.log(web3.isAddress(fromAddress));
                    console.log(web3.isAddress(toAddress));
                    return realtorTokenInstance.transfer(toAddress, amount, {from: fromAddress});
                }).then(function(result) {
                    alert('Transfer Successful!');
                    console.log("result: ", result)
                    dispatch(transferTokens({
                        transferData: {
                            from: toAddress,
                            amount: amount
                        }
                    }))
                }).catch(function(err) {
                    console.log(err.message);
                });
            })
        }
    } else {
        console.log('Error getting users balance')
    }
}