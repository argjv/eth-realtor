import React, { Component } from 'react'
import {BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class TransactionsTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.name,
      coinbase: this.props.coinbase,
      transactionsData: this.props.transactionsData
    }
  }

  componentDidMount() {
    this.props.getTransactions();
    console.log("after mount")
  }

  render() {
    return (
      <div className="pure-u-1-1 reduced-font">
        <BootstrapTable tableContainerClass="pure-table table-striped" data={this.state.transactionsData} headers={true} >
          {/* <TableHeaderColumn dataField='from' isKey={ true }> From</TableHeaderColumn> */}
          <TableHeaderColumn dataField='to' className='td-header-string-example'>To</TableHeaderColumn>
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