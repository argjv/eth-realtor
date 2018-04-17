import React, { Component } from 'react'
import { NavLink, Route,Switch, Redirect } from 'react-router-dom'
import { HiddenOnlyAuth, VisibleOnlyAuth} from './util/wrappers.js'

// UI Components
import LoginButtonContainer from './user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from './user/ui/logoutbutton/LogoutButtonContainer'

//MD Components
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';  
import ListItem from 'material-ui/List';
import ListItemIcon from 'material-ui/List';
import ListItemText from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//import injectSheet from 'react-jss';
import 'typeface-roboto';
import classNames from 'classnames';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import cx from 'classnames'
import {appRoutes} from "./routes.js";

// Styles
//import './material-dashboard-react.css';
/*import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'*/

const drawerWidth = 240;

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 1720 ,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },

  list: {
    marginTop: "20px",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    marginBottom: "0",
    listStyle: "none"
  },
  item: {
    position: "relative",
    display: "block",
    textDecoration: "none",
  },
  itemLink: {
    width: 'auto',
    transition: "all 300ms linear",
    margin: "10px 15px 0",
    borderRadius: "3px",
    position: "relative",
    display: "block",
    padding: "10px 15px",
    backgroundColor: "transparent",
    ...defaultFont
  },
  itemIcon: {
    width: "24px",
    height: "30px",
    float: "left",
    marginRight: "15px",
    textAlign: "center",
    verticalAlign: "middle",
    color: "rgba(255, 255, 255, 0.8)"
  },
  itemText: {
    ...defaultFont,
    margin: "0",
    lineHeight: "30px",
    fontSize: "14px",
    color: "#333333"
  },
  whiteFont: {
    color: "#333333" 
}
});


class App extends Component {
        state = {
        open: false,
        };

        handleDrawerOpen = () => {
        this.setState({ open: true });
        };

        handleDrawerClose = () => {
        this.setState({ open: false });
        };

  render() {

	const switchRoutes = (

  	<Switch>
    	{appRoutes.map((prop, key) => {
    	if (prop.redirect)
        	return <Redirect from={prop.path} to={prop.to} key={key} />;
      	return <Route path={prop.path} component={prop.component} key={key} />;
    	})}
  	</Switch>
	);

    const OnlyAuthLinks = VisibleOnlyAuth(() =>
    	<span>
    		<LogoutButtonContainer />
    	</span>
    )

    const OnlyGuestLinks = HiddenOnlyAuth(() =>

      <span>
             <LoginButtonContainer />
      </span>
    )

    return (
      <div className="App">
        <div className={this.props.classes.root}>
        <AppBar
          position="absolute"
          className={classNames(this.props.classes.appBar, this.state.open && this.props.classes.appBarShift)}>
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(this.props.classes.menuButton, this.state.open && this.props.classes.hide)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Eth-realtor
            </Typography>
            <OnlyGuestLinks />
        	<OnlyAuthLinks />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(this.props.classes.drawerPaper, !this.state.open && this.props.classes.drawerPaperClose),
          }}
          open={this.state.open}>

          <div className={this.props.classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {this.props.theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List className={this.props.classes.list}>
      	{
      	appRoutes.map((prop, key) => {
        if (prop.redirect) return null;
        const listItemClasses = cx({
          [" " + this.props.classes[this.props.color]]: location.pathname.indexOf(prop.path) > -1 ? true : false
        });
        const whiteFontClasses = cx({
          [" " + this.props.classes.whiteFont]: location.pathname.indexOf(prop.path) > -1 ? true : false
        });
        return (
          <NavLink
            to={prop.path}
            className={this.props.classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button="true" className={this.props.classes.itemLink + listItemClasses}>
              <ListItemIcon className={this.props.classes.itemIcon + whiteFontClasses}>
                <prop.icon />
              </ListItemIcon>
              <ListItemText
                className={this.props.classes.itemText + whiteFontClasses}

              >{prop.sidebarName}</ListItemText>
            </ListItem>
          </NavLink>
        );
      	})}
        
    	</List>
        </Drawer>
        <main className={this.props.classes.content}>
          <div className={this.props.classes.toolbar} />
          {switchRoutes}
        </main>
      </div>
      </div>
    	);
	}
  }


App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,

};

export default withStyles(styles, { withTheme: true })(App)