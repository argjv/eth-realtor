import React, { Component } from 'react'
import {BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class TransactionsTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.name,
      coinbase: this.props.coinbase,
      inTransactionsData: this.props.inTransactionsData,
      outTransactionsData: this.props.outTransactionsData
    }
  }

  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    return (
      <div className="pure-u-1-1 reduced-font">
        <h2>Received transactions history</h2>
        <BootstrapTable tableContainerClass="pure-table table-striped" data={this.state.inTransactionsData} headers={true} >
          <TableHeaderColumn dataField='from' isKey={ true }> From</TableHeaderColumn>
          <TableHeaderColumn dataField='Time' columnClassName='td-column-string-example'>Time</TableHeaderColumn>
          <TableHeaderColumn dataField='value' columnClassName='td-column-string-example'>Value</TableHeaderColumn>
          <TableHeaderColumn dataField='gasPrice' columnClassName='td-column-string-example'>Gas Price</TableHeaderColumn>
          <TableHeaderColumn dataField='gas' columnClassName='td-column-string-example'>Gas</TableHeaderColumn>
          <TableHeaderColumn dataField='blockNumber' columnClassName='td-column-string-example'>Block Number</TableHeaderColumn>
        </BootstrapTable>
        <h2>Sent transactions history</h2>
        <BootstrapTable tableContainerClass="pure-table table-striped" data={this.state.outTransactionsData} headers={true} >
          <TableHeaderColumn dataField='to' isKey={ true } >To</TableHeaderColumn>
          <TableHeaderColumn dataField='Time' columnClassName='td-column-string-example'>Time</TableHeaderColumn>
          <TableHeaderColumn dataField='value' columnClassName='td-column-string-example'>Value</TableHeaderColumn>
          <TableHeaderColumn dataField='gasPrice' columnClassName='td-column-string-example'>Gas Price</TableHeaderColumn>
          <TableHeaderColumn dataField='gas' columnClassName='td-column-string-example'>Gas</TableHeaderColumn>
          <TableHeaderColumn dataField='blockNumber' columnClassName='td-column-string-example'>Block Number</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default TransactionsTable