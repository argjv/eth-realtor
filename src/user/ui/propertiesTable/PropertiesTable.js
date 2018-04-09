import React, { Component } from 'react';
import Griddle, {RowDefinition, ColumnDefinition} from 'griddle-react';
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

  onPublish(id){
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
    return (
      <div className="pure-u-1-1 reduced-font">
        <Griddle data={this.props.propertiesData} styleConfig={styleConfig} showFilter={false} showSettings={false}>
          <RowDefinition>
            <ColumnDefinition id="address1" title="Address" order={1} width={180}/>
            <ColumnDefinition id="address2" title="Apt/Suite" width={80}/>
            <ColumnDefinition id="city" title="City" width={80}/>
            <ColumnDefinition id="state" title="State" width={80}/>
            <ColumnDefinition id="beds" title="Beds" width={80}/>
            <ColumnDefinition id="baths" title="Baths" width={80}/>
            <ColumnDefinition id="sqft" title="Sqft" width={80}/>
            <ColumnDefinition id="price" title="Price" width={80}/>
            <ColumnDefinition id="status" title="Status" width={80}/>
            <ColumnDefinition id="ethid" title="Options" width={50} customComponent={Toolbar} />
          </RowDefinition>
        </Griddle>
        <Collapse isOpen={this.state.collapse}>
        <Button color="danger" onClick={this.collapse} style={{ marginBottom: '1rem' }}>Collapse</Button>
          <Card>
            <CardBody>
              Showing offers for {this.state.ethid}>
              <OffersTableContainer ethid={this.state.ethid}/>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default PropertiesTable
