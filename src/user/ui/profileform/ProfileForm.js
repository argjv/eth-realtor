import React, { Component } from 'react'
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

class ProfileForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.name
    }
  }

  onInputChange(event) {
    this.setState({ name: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.state.name.length < 2)
    {
      return alert('Please fill in your name.')
    }
    this.props.onProfileFormSubmit(this.state.name)
  }

  render() {
    return(
                <div>
                 <Grid item xs={3}>
                    <form className={this.props.classes.container} noValidate autoComplete="off">
                        <TextField
                            id="name"
                            label="name"
                            required
                            defaultValue=""
                            placeholder="First User"
                            helperText="This is a required field."
                            onChange={(event) => this.onInputChange(event)}
                            className={this.props.classes.textField}
                            margin="normal"/>
                        <Button className={this.props.classes.button} variant="raised" color="primary" onClick={(event) => this.handleSubmit(event)}>
                            Update
                        </Button>
                    </form>
                </Grid>
              </div>  
    )
  }
}

ProfileForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileForm);
