import React, { Component } from 'react'

import TransactionTableContainer from '../../user/ui/transactionsTable/TransactionsTableContainer'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>{this.props.authData.name}'s transaction history</h1>
          </div>
          <TransactionTableContainer />
        </div>
      </main>
    )
  }
}

export default Dashboard
