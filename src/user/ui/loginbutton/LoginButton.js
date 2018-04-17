import React from 'react'
//import PropTypes from 'prop-types';
//import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const LoginButton = ({ onLoginUserClick }) => {
  return(
         <Button variant="raised" color="primary" onClick={(event) => onLoginUserClick(event)}>Login</Button>
 
  )
}

export default LoginButton