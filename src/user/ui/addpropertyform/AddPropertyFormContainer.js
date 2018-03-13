import { connect } from 'react-redux'
import AddPropertyForm from './AddPropertyForm'
import { addProperty } from './AddPropertyFormActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPropertyFormSubmit: (propertyData) => {
      dispatch(addProperty(propertyData))
    }
  }
}

const AddPropertyFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPropertyForm)

export default AddPropertyFormContainer
