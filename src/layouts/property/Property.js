import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import AddPropertyFormContainer from '../../user/ui/addpropertyform/AddPropertyFormContainer'
import PropertiesTableContainer from '../../user/ui/propertiesTable/PropertiesTableContainer'

class Property extends Component {
  constructor(props, { authData }) {
    super(props);
    authData = this.props;
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g pure-u-1-1">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                Properties
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                Add new property
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <h1>Properties list</h1>
                  <PropertiesTableContainer />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <h1>Add your property to the blockchain!</h1>
                  <AddPropertyFormContainer />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </main>
    )
  }
}

export default Property