import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

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

class AddPropertyForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      address1: '',
      address2: '',
      city: '',
      zip: '',
      estate: '',
      beds: 0,
      baths: 0,
      sqft: 0,
      price: 0
    }
  }

  onInputChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.address1.length < 2)
    {
      return alert('Please fill in the property address.')
    }
    this.props.onAddPropertyFormSubmit(this.state)
  }

  render() {
  const { classes } = this.props;
    return(
  <div>
    <Grid item xs={6}>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="address1"
          label="Address"
          multiline
          rowsMax="2"
          value={this.state.address1}
          onChange={(event) => this.onInputChange(event)}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="address2"
          label="Apartment/suite number"
          multiline
          rowsMax="2"
          value={this.state.address2}
          onChange={(event) => this.onInputChange(event)}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="city"
          label="City"
          className={classes.textField}
          value={this.state.city}
          onChange={(event) => this.onInputChange(event)}
          margin="normal"
        />

        <TextField
          id="zip"
          label="ZIP"
          className={classes.textField}
          value={this.state.zip}
          onChange={(event) => this.onInputChange(event)}
          margin="normal"
        />
        <TextField
          id="estate"
          label="State"
          className={classes.textField}
          value={this.state.estate}
          onChange={(event) => this.onInputChange(event)}
          margin="normal"
        />

        <TextField
          id="beds"
          label="Beds"
          value={this.state.beds}
          onChange={(event) => this.onInputChange(event)}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="baths"
          label="Baths"
          value={this.state.baths}
          onChange={(event) => this.onInputChange(event)}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="sqft"
          label="Covered square footage"
          value={this.state.sqft}
          onChange={(event) => this.onInputChange(event)}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="price"
          label="Selling Price"
          value={this.state.price}
          onChange={(event) => this.onInputChange(event)}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <Button className={this.props.classes.button} variant="raised" color="primary" onClick={(event) => this.handleSubmit(event)}>
          Add
        </Button>

      </form>
  </Grid>
</div>
    )
  }
}

AddPropertyForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddPropertyForm);
