import React, { Component } from 'react';
import Griddle, {RowDefinition, ColumnDefinition} from 'griddle-react';
import { Button, ButtonToolbar } from 'reactstrap';

class PropertiesTable extends Component {
  componentDidMount() {
    this.props.getProperties();
  }

  render() {
    const Toolbar = ({ value }) => (
      <ButtonToolbar>
        <Button color="primary" name="Publish">
          Publish
        </Button>
      </ButtonToolbar>);
    return (
      <div className="pure-u-1-1 reduced-font">
        <Griddle data={this.props.propertiesData} >
          <RowDefinition>
            <ColumnDefinition id="address1" title="Address" order={1} width={180}/>
            <ColumnDefinition id="address2" title="Apt/Suite" width={80}/>
            <ColumnDefinition id="city" title="City" width={80}/>
            <ColumnDefinition id="estate" title="State" width={80}/>
            <ColumnDefinition id="beds" title="Beds" width={80}/>
            <ColumnDefinition id="baths" title="Baths" width={80}/>
            <ColumnDefinition id="sqft" title="Sqft" width={80}/>
            <ColumnDefinition id="price" title="Price" width={80}/>
            <ColumnDefinition id="_id" title=" " customComponent={Toolbar} />
          </RowDefinition>
        </Griddle>
      </div>
    );
  }
}

export default PropertiesTable
