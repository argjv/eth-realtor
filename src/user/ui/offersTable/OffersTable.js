import React, { Component } from 'react';
import { connect } from 'react-redux';
import Griddle, { RowDefinition, ColumnDefinition } from 'griddle-react';
import { Button, ButtonToolbar } from 'reactstrap';

class OffersTable extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  onAccept(owner, ethid) {
    this.props.onAcceptOffer(owner, ethid)
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

    const rowDataSelector = (state, { griddleKey }) => {
      return state
        .get('data')
        .find(rowMap => rowMap.get('griddleKey') === griddleKey)
        .toJSON();
    };

    const enhancedWithRowData = connect((state, props) => {
      return {
        // rowData will be available into MyCustomComponent
        rowData: rowDataSelector(state, props)
      };
    });

    const Toolbar = ({ value, griddleKey, rowData }) => (
      <ButtonToolbar>
        <Button color="primary" name="Accept" onClick={() => this.onAccept(rowData.owner, value)} >
          Accept
        </Button>
      </ButtonToolbar>);

    const griddleLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
      <div>
        <Table />
        <br />
        Page <Pagination />
      </div>
    );

    return (
      <div className="pure-u-1-1 reduced-font">
        <Griddle data={this.props.offersData} styleConfig={styleConfig} components={{ Layout: griddleLayout }}>
          <RowDefinition>
            <ColumnDefinition id="owner" title="Submitted by" order={1} />
            <ColumnDefinition id="offer" title="Offer" />
            <ColumnDefinition id="createdAt" title="First submitted" />
            <ColumnDefinition id="updatedAt" title="Last updated" />
            <ColumnDefinition id="ethid" title="Options" width={50} customComponent={enhancedWithRowData(Toolbar)} />
          </RowDefinition>
        </Griddle>
      </div>
    );
  }
}

export default OffersTable
