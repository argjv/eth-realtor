import React, { Component } from 'react'
import Griddle, {RowDefinition, ColumnDefinition} from 'griddle-react';

class TransactionsTable extends Component {
  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    const styleConfig = {
      icons: {
        TableHeadingCell: {
          sortDescendingIcon: '▼',
          sortAscendingIcon: '▲',
        },
      },
      classNames: {
        Row: 'row-class',
        Table: 'table-striped, table',
      },
      styles: {
        Filter: { fontSize: 18 },
      },
    };
    return (
      <div className="pure-u-1-1 reduced-font">
        <h2>Received transactions history</h2>
        <Griddle data={this.props.inTransactionsData} styleConfig={styleConfig} showFilter={false} showSettings={false}>
          <RowDefinition>
            <ColumnDefinition id="from" title="From" order={1}/>
            <ColumnDefinition id="time" title="Time"/>
            <ColumnDefinition id="value" title="Value"/>
            <ColumnDefinition id="gasPrice" title="Gas Price"/>
            <ColumnDefinition id="gas" title="Gas"/>
            <ColumnDefinition id="blockNumber" title="Block Number"/>
          </RowDefinition>
        </Griddle>
        <h2>Sent transactions history</h2>
        <Griddle data={this.props.outTransactionsData} styleConfig={styleConfig} showFilter={false} showSettings={false}>
          <RowDefinition>
            <ColumnDefinition id="to" title="To" order={1}/>
            <ColumnDefinition id="time" title="Time"/>
            <ColumnDefinition id="value" title="Value"/>
            <ColumnDefinition id="gasPrice" title="Gas Price"/>
            <ColumnDefinition id="gas" title="Gas"/>
            <ColumnDefinition id="blockNumber" title="Block Number"/>
          </RowDefinition>
        </Griddle>
      </div>
    );
  }
}

export default TransactionsTable