import React, { Component } from 'react'

class Wallet extends Component {
    componentDidMount() {
        this.props.onWalletLoadGetBalance(this.props.coinbase);
    }
    render() {
        return (
          <div className="pure-u-1-1">
            <p>Wallet: {this.props.coinbase}</p>
            <p>Balance: {this.props.balance} wei ({(this.props.balance / 1000000000000000000).toFixed(4)} eth)</p>
          </div>
        )
    }
}

export default Wallet