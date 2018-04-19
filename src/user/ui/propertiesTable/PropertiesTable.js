import React, { Component } from 'react';
import Griddle, { RowDefinition, ColumnDefinition } from 'griddle-react';
import { Collapse, Button, ButtonToolbar, CardBody, Card } from 'reactstrap';
import OffersTableContainer from '../offersTable/OffersTableContainer'

class PropertiesTable extends Component {
  constructor(props) {
    super(props);
    this.collapse = this.collapse.bind(this);
    this.state = { collapse: false };
  }

  componentDidMount() {
    this.props.getProperties();
  }

  onPublish(id) {
    this.props.onPublishProperty(id)
  }

  onViewOffers(id) {
    this.setState({
      collapse: true,
      ethid: id
    });
    this.props.getOffers(id);
  }

  collapse() {
    this.setState({ collapse: false });
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
    const Toolbar = ({ value }) => (
      <ButtonToolbar>
        <Button color="primary" name="Publish" onClick={() => this.onPublish(value)} >
          Publish
        </Button>
        <Button color="success" name="Offers" onClick={() => this.onViewOffers(value)} >
          Offers
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
        <Griddle data={this.props.propertiesData} styleConfig={styleConfig} components={{ Layout: griddleLayout }}>
          <RowDefinition>
            <ColumnDefinition id="address1" title="Address" order={1} />
            <ColumnDefinition id="address2" title="Apt/Suite" />
            <ColumnDefinition id="city" title="City" />
            <ColumnDefinition id="state" title="State" />
            <ColumnDefinition id="beds" title="Beds" />
            <ColumnDefinition id="baths" title="Baths" />
            <ColumnDefinition id="sqft" title="Sqft" />
            <ColumnDefinition id="price" title="Price" />
            <ColumnDefinition id="status" title="Status" />
            <ColumnDefinition id="ethid" title="Options" customComponent={Toolbar} />
          </RowDefinition>
        </Griddle>
        <Collapse isOpen={this.state.collapse}>
          <Button color="danger" onClick={this.collapse} style={{ marginBottom: '1rem' }}>Collapse</Button>
          <Card>
            <CardBody>
              Showing offers for {this.state.ethid}
              <OffersTableContainer ethid={this.state.ethid} />
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default PropertiesTable
