import { connect } from 'react-redux'
import OffersTable from './OffersTable'
import { acceptOffer } from './OffersTableActions'

const mapStateToProps = (state, ownProps) => {
  return {
    offersData: state.user.offers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAcceptOffer: (owner, ethid) => {
      dispatch(acceptOffer(owner, ethid))
    }
  }
}

const OffersTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OffersTable)

export default OffersTableContainer
