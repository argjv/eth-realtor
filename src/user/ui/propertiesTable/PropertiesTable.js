import React, { Component } from 'react';
import Griddle from 'griddle-react';

class PropertiesTable extends Component {
  componentDidMount() {
    this.props.getProperties();
  }

  render() {
    return (
      <div className="pure-u-1-1 reduced-font">
        <Griddle data={this.props.propertiesData} />
      </div>
    );
  }
}

export default PropertiesTable
