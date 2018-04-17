import { connect } from 'react-redux'
import Wallet from './Wallet'
import { getBalance, transfer } from './WalletActions'

const mapStateToProps = (state, ownProps) => {
  return {
    coinbase: state.user.coinbase,
    balance: state.user.balance
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onWalletLoadGetBalance: (coinbase) => {
      dispatch(getBalance(coinbase))
    },
    onTransferSubmit: (address, amount) => {
      dispatch(transfer(address, amount))
    }
  }
}

const WalletContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Wallet)

export default WalletContainer