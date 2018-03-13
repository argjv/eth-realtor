import React, { Component } from 'react'

import AddPropertyFormContainer from '../../user/ui/addpropertyform/AddPropertyFormContainer'

class Property extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Add your property to the blockchain!</h1>
            <p></p>
            <AddPropertyFormContainer />
          </div>
        </div>
      </main>
    )
  }
}

export default Property