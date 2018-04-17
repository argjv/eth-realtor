import React, { Component } from 'react'

import TransactionTableContainer from '../../user/ui/transactionsTable/TransactionsTableContainer'
import SubmitOfferTableContainer from '../../user/ui/submitOfferTable/SubmitOfferTableContainer'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return (
      <main className="container">
        <div className="pure-g pure-u-1-1">
          <SubmitOfferTableContainer />
          <h1>{this.props.authData.name}'s transaction history</h1>
          <TransactionTableContainer />
        </div>
      </main>
    )
  }
}

export default Dashboard
