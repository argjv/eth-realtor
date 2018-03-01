import { connect } from 'react-redux'
import TransactionsTable from './TransactionsTable'
import { getTransactions } from './TransactionsTableActions'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    inTransactionsData: state.user.inTransactionsData,
    outTransactionsData: state.user.outTransactionsData
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
