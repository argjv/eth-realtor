import React, { Component } from 'react'
import ProfileFormContainer from '../../ui/profileform/ProfileFormContainer'
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
//import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ({

  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginTop:20,
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class Profile extends Component {
  render() {
    const bull = <span className={this.props.classes.bullet}>•</span>;
    return(

    <div >
      <Grid container>
        <Grid item xs={6}> 
           <Card className={this.props.classes.card}>
            <CardContent>
              <Typography variant="display1">
                Profile
              </Typography>
              <Typography className={this.props.classes.title} variant="title" color="textSecondary">
                {bull} Edit your account name.<br />
                {bull} This action requires gas.  
              </Typography>
              <Typography component="p">
                Minimum Gas Price is 0.1 GWEI, Input using metamask.
              </Typography>
              <ProfileFormContainer />
            </CardContent>
          </Card>
          </Grid>
    </Grid>
  </div>

    )
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Profile);
