import React, { Component } from 'react'

class Home extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>ETH Realtor</h1>
            <h2>Secure Real Estate Management</h2>
            <p>ETH Realtor act as an escrow using ethereum smart contracts during a real estate transaction.</p>
            <h2>Smart Contract Authentication</h2>
            <p>ETH Realtor uses smart contracts to uniquely identify property owners authorized to execute a sell.</p>
            <h2>Multi signature wallets</h2>
            <p>ETH Realtor allow users to define multiple owners for an account before a transaction is initiated or completed</p>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
