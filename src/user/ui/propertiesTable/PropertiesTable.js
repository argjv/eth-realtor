import React from 'react';
import Griddle from 'griddle-react';

class PropertiesTable extends Component {
  componentDidMount() {
    this.props.getProperties();
  }

  render() {
    return (
      <div className="pure-u-1-1 reduced-font">
        <h2>Properties list</h2>
        <Griddle data={this.props.inPropertiesData} />
      </div>
    );
  }
}

export default PropertiesTable
