import React, { Component } from 'react'

import WalletContainer from '../../user/ui/wallet/WalletContainer'
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

class Wallet extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(

    <div>

      <Grid container>
        <Grid item xs={12}> 
           <Card className={this.props.classes.card}>
            <CardContent>
              <Typography variant="display3">
                  {this.props.authData.name}'s wallet
              </Typography>
              <Typography variant="headline">
                  This page contains the user wallet information and operations.
              </Typography>
              <WalletContainer />
          </CardContent>
        </Card>
      </Grid>
    </Grid>

</div>

    )
  }
}

Wallet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Wallet);

