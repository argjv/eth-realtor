import { connect } from 'react-redux'
import TransactionsTable from './TransactionsTable'
import { getTransactions } from './TransactionsTableActions'

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.user.data.name,
    coinbase: state.user.data.coinbase,
    transactionsData: state.user.data.transactionsData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTransactions: () => {
      dispatch(getTransactions())
    }
  }
}

const TransactionsTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsTable)

export default TransactionsTableContainer
