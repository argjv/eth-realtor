import React from 'react'
import Button from 'material-ui/Button';
const LogoutButton = ({ onLogoutUserClick }) => {
  return(
   
      <Button variant="raised" color="primary" onClick={(event) => onLogoutUserClick(event)}>Logout</Button>
 
  )
}
export default LogoutButton