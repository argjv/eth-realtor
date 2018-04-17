import { connect } from 'react-redux'
import SubmitOfferTable from './SubmitOfferTable'
import { getAllProperties, submitOffer } from './SubmitOfferTableActions'

const mapStateToProps = (state, ownProps) => {
  return {
    propertiesData: state.user.properties,
    offersData: state.user.offers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProperties: () => {
      dispatch(getAllProperties())
    },
    onSubmitOffer: (ethid, offer) => {
      dispatch(submitOffer(ethid, offer))
    }
  }
}

const SubmitOfferTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitOfferTable)

export default SubmitOfferTableContainer
