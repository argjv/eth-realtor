import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

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
            <InputGroup>
                <InputGroupAddon addonType="prepend">Send to</InputGroupAddon>
                <Input id="address" placeholder="ethereum address..." />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend">Amount</InputGroupAddon>
                <Input id="amount" placeholder="Amount" type="number" step="1" />
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
            </InputGroup>
            <br />
            <button type="submit" className="pure-button pure-button-primary" onClick={this.handleSubmit.bind(this)} >Transfer</button>
          </div>
        )
    }
}

export default Wallet