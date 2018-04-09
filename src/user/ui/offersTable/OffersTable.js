import React, { Component } from 'react';
import Griddle, {RowDefinition, ColumnDefinition} from 'griddle-react';
import { Button, ButtonToolbar } from 'reactstrap';

class OffersTable extends Component {
  onAccept(owner){
    this.props.onAcceptOffer(owner)
  }

  componentWillReceiveProps
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
    const Toolbar = ({ value }) => (
      <ButtonToolbar>
        <Button color="primary" name="Accept" onClick={() => this.onAccept(value)} >
          Accept
        </Button>
      </ButtonToolbar>);
    return (
      <div className="pure-u-1-1 reduced-font">
        <Griddle data={this.props.offersData} styleConfig={styleConfig} showFilter={false} showSettings={false}>
          <RowDefinition>
            <ColumnDefinition id="owner" title="Submitted by" order={1}/>
            <ColumnDefinition id="offer" title="Offer"/>
            <ColumnDefinition id="createdAt" title="First submitted"/>
            <ColumnDefinition id="updatedAt" title="Last updated"/>
            <ColumnDefinition id="owner" title="Options" width={50} customComponent={Toolbar} />
          </RowDefinition>
        </Griddle>
      </div>
    );
  }
}

export default OffersTable
