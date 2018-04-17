import React, { Component } from 'react'

import TransactionTableContainer from '../../user/ui/transactionsTable/TransactionsTableContainer'
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


class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(

    <div >
      <Grid container>
        <Grid item xs={12}> 
           <Card className={this.props.classes.card}>
            <CardContent>
              <Typography variant="display3">
                  {this.props.authData.name}'s transaction history
              </Typography>
          <TransactionTableContainer />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </div>

    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);