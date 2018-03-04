import React, { Component } from 'react'

class Wallet extends Component {
    componentDidMount() {
        this.props.onWalletLoadGetBalance(this.props.coinbase);
    }

    handleSubmit(event) {
        event.preventDefault();
        const address = document.getElementById("address").value;
        const amount = document.getElementById("amount").value;
        console.log(address, amount);
        this.props.onTransferSubmit(address, amount);
    }

    render() {
        return (
          <div className="pure-u-1-1">
            <p>Wallet: {this.props.coinbase}</p>
            <p>Balance: {this.props.balance} RT</p>
            <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
                    <label htmlFor="address">Address</label>
                    <input id="address" type="text" placeholder="Address" />
                    <span className="pure-form-message">This is a required field.</span>

                    <label htmlFor="amount">Amount</label>
                    <input id="amount" type="text" placeholder="Amount" />
                    <span className="pure-form-message">This is a required field.</span>

                    <br />

                    <button type="submit" className="pure-button pure-button-primary">Transfer</button>
                </fieldset>
            </form>
          </div>
        )
    }
}

export default Wallet