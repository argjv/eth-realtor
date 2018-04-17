import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import getWeb3 from './util/web3/getWeb3'

// Layouts
import './material-dashboard-react.css';

// Redux Store
import store from './store'

// Initialize react-router-redux.
import history from './history'

import App from "./App"

const indexRoutes = [{ path: "/", component: App }];

// Initialize web3 and set in Redux.
getWeb3
.then(results => {
  console.log('Web3 initialized!')
})
.catch(() => {
  console.log('Error in web3 initialization.')
})

ReactDOM.render((
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />;
          })}
        </Switch>
      </ConnectedRouter>
    </Provider>
  ),
  document.getElementById('root')
);
