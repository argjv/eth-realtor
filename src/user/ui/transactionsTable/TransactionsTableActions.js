import store from '../../../store'

export const TABLE_LOAD = 'TABLE_LOAD'
function tableLoaded(transactionsPayload) {
  return {
    type: TABLE_LOAD,
    payload: transactionsPayload
  }
}

export function getTransactions(startBlockNumber, endBlockNumber) {
    let web3 = store.getState().web3.web3Instance
    let transactionsData = []
    let userCoinbase = ""
    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {
      return function(dispatch) {
        web3.eth.getCoinbase((error, coinbase) => {
          // Log errors, if any.
          if (error) {
            console.error(error);
          }
          if (endBlockNumber == null) {
            endBlockNumber = web3.eth.blockNumber;
            console.log("Using endBlockNumber: " + endBlockNumber);
          }
          if (startBlockNumber == null) {
            startBlockNumber = endBlockNumber - 1000;
            if (startBlockNumber < 0) {
              startBlockNumber = 0
            }
            console.log("Using startBlockNumber: " + startBlockNumber);
          }
          console.log("Searching for transactions to/from account \"" + coinbase + "\" within blocks "  + startBlockNumber + " and " + endBlockNumber);
          userCoinbase = coinbase;

          for (var i = startBlockNumber; i <= endBlockNumber; i++) {
            if (i % 1000 === 0) {
              console.log("Searching block " + i);
            }
            var block = web3.eth.getBlock(i, true);
            if (block != null && block.transactions != null) {
              block.transactions.forEach( function(e) {
                if (coinbase === "*" || coinbase === e.from || coinbase === e.to) {
                  let transaction = {
                    "from": e.from,
                    "to": e.to,
                    "time": block.timestamp + " " + new Date(block.timestamp * 1000).toGMTString(),
                    "value": e.value,
                    "gasPrice": e.gasPrice,
                    "gas": e.gas,
                    "blockNumber": e.blockNumber
                  }
                  transactionsData.push(transaction);
                }
              })
            }
          }
          console.log("Dispatching transactions");
          dispatch(tableLoaded({
            "coinbase": userCoinbase,
            "transactionsData": transactionsData
          }))
        })
      }
    } else {
      console.error('Web3 is not initialized.');
    }
}