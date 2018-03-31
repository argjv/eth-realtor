import React, { Component } from 'react'

import AddPropertyFormContainer from '../../user/ui/addpropertyform/AddPropertyFormContainer'
import PropertiesTableContainer from '../../user/ui/propertiesTable/PropertiesTableContainer'

class Property extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-3">
            <h1>Add your property to the blockchain!</h1>
            <AddPropertyFormContainer />
          </div>
          <div className="pure-u-2-3">
            <h1>Properties list</h1>
            <PropertiesTableContainer />
          </div>
        </div>
      </main>
    )
  }
}

export default Property