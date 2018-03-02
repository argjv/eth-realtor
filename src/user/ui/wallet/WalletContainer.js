import { connect } from 'react-redux'
import Wallet from './Wallet'
import { getBalance } from './WalletActions'

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps: ', state)
  return {
    coinbase: state.user.coinbase,
    balance: state.user.balance
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onWalletLoadGetBalance: (coinbase) => {
      dispatch(getBalance(coinbase))
    }
  }
}

const WalletContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Wallet)

export default WalletContainer