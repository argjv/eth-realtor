import React, { Component } from 'react'
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
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
class Home extends Component {
  render() {
    return(

    <div>
      <Grid container>
        <Grid item xs={12}> 
           <Card className={this.props.classes.card}>
            <CardContent>
              <Typography variant="display2">
                  ETH Realtor
              </Typography>
              <Typography variant="headline">
                  Secure Real Estate Management.
              </Typography>
              <Typography variant="subheading">
                  ETH Realtor act as an escrow using ethereum smart contracts during a real estate transaction.
              </Typography>
              <Typography variant="headline">
                  Smart Contract Authentication.
              </Typography>
              <Typography variant="subheading">
                  ETH Realtor uses smart contracts to uniquely identify property owners authorized to execute a sell.
              </Typography>
              <Typography variant="headline">
                  Multi signature wallets
              </Typography>
              <Typography variant="subheading">
                  ETH Realtor allow users to define multiple owners for an account before a transaction is initiated or completed.
              </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </div>
 
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
