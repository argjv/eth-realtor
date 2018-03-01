import { connect } from 'react-redux'
import TransactionsTable from './TransactionsTable'
import { getTransactions } from './TransactionsTableActions'

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps: ', state)
  return {
    inTransactionsData: state.user.inTransactions,
    outTransactionsData: state.user.outTransactions
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
