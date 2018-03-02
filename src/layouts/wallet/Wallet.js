import React, { Component } from 'react'

import WalletContainer from '../../user/ui/wallet/WalletContainer'

class Wallet extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Wallet</h1>
            <h2>{this.props.authData.name}'s wallet</h2>
            <p>This page contains the user wallet information and operations.</p>
            <WalletContainer />
          </div>
        </div>
      </main>
    )
  }
}

export default Wallet
