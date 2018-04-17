import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },

  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  }
});


class Wallet extends Component {
    componentDidMount() {
        this.props.onWalletLoadGetBalance(this.props.coinbase);
    }

    handleSubmit(event) {
        event.preventDefault();
        const address = document.getElementById("address").value;
        const amount = document.getElementById("amount").value;
        console.log(address, amount);
        this.props.onTransferSubmit(address, amount);
    }

    render() {
        return (
          <div>
            <Typography variant="subheading">
                Wallet: {this.props.coinbase}
            </Typography>
            <Typography variant="subheading">
                Balance: {this.props.balance} RT
            </Typography>
                <Grid item xs={3}>
                    <form className={this.props.classes.container} noValidate autoComplete="off">
                        <TextField
                            id="address"
                            label="Address"
                            required
                            multiline
                            rowsMax="4"
                            defaultValue=""
                            placeholder="0x89860eeE089DEE7"
                            helperText="This is a required field."
                            className={this.props.classes.textField}
                            margin="normal"/>
                        <TextField
                            id="amount"
                            label="Amount"
                            type="number"
                            className={this.props.classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            margin="normal"/>
                        <Button className={this.props.classes.button} variant="raised" color="primary" onClick={(event) => this.handleSubmit(event)}>
                            Transfer
                            <Icon className={this.props.classes.rightIcon}>send</Icon>
                        </Button>
                    </form>
                </Grid>
          </div>
        )
    }
}

Wallet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Wallet);