import { connect } from 'react-redux'
import PropertiesTable from './PropertiesTable'
import { getProperties, publishProperty } from './PropertiesTableActions'

const mapStateToProps = (state, ownProps) => {
  return {
    propertiesData: state.user.properties
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProperties: () => {
      dispatch(getProperties())
    },
    onPublishProperty: (id) => {
      dispatch(publishProperty(id))
    }
  }
}

const PropertiesTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertiesTable)

export default PropertiesTableContainer
