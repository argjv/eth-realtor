import store from '../../../store'

export const REQUEST_TRANSACTIONS = 'REQUEST_TRANSACTIONS'
function requestTransactions() {
  return {
    type: REQUEST_TRANSACTIONS
  }
}

export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS'
function receiveTransactions(transactionsPayload) {
  return {
    type: RECEIVE_TRANSACTIONS,
    payload: transactionsPayload
  }
}

export function getTransactions() {
    let web3 = store.getState().web3.web3Instance
    let startBlockNumber = store.getState().user.transactionsLastBlockUpdate;
    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {
      return function(dispatch) {
        dispatch(requestTransactions());

        return web3.eth.getCoinbase((error, coinbase) => {
          // Log errors, if any.
          if (error) {
            console.error(error);
          }
          web3.eth.getBlock("latest", (error, latestBlock) => {
            let endBlockNumber = latestBlock.number;
            console.log("Searching for transactions to/from account \"" + coinbase + "\" within blocks "  + startBlockNumber + " and " + endBlockNumber);
            for (let i = startBlockNumber; i <= endBlockNumber; i++) {
              web3.eth.getBlock(i, true, (error, block) => {
                if (block != null && block.transactions != null) {
                  block.transactions.forEach( function(e) {
                    if (coinbase === "*" || coinbase === e.from || coinbase === e.to) {
                      let inTransactionsData = []
                      let outTransactionsData = []
                      let transaction = {
                        "from": e.from,
                        "to": e.to,
                        "time": new Date(block.timestamp * 1000).toGMTString(),
                        "value": e.value.c[0],
                        "gasPrice": e.gasPrice.c[0],
                        "gas": e.gas,
                        "blockNumber": e.blockNumber
                      }
                      if (coinbase === e.from) {
                        outTransactionsData.push(transaction);
                      } else {
                        inTransactionsData.push(transaction);
                      }
                      dispatch(receiveTransactions({
                        coinbase: coinbase,
                        inTransactions: inTransactionsData,
                        outTransactions: outTransactionsData,
                        transactionsLastBlockUpdate: endBlockNumber
                      }))
                    }
                  })
                }
              });
            }
          })
        })
      }
    } else {
      console.error('Web3 is not initialized.');
    }
}
