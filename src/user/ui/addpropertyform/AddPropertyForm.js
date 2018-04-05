import React, { Component } from 'react';

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
    return(
        <div>
            <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
                <label htmlFor="address1">Address</label>
                <input id="address1" type="text" value={this.state.address1} onChange={this.onInputChange.bind(this)} placeholder="Address" />

                <label htmlFor="address2">Apartment/suite number</label>
                <input id="address2" type="text" value={this.state.address2} onChange={this.onInputChange.bind(this)} placeholder="apt/suite #" />

                <label htmlFor="city">City</label>
                <input id="city" type="text" value={this.state.city} onChange={this.onInputChange.bind(this)} placeholder="City" />

                <label htmlFor="zip">Zip code</label>
                <input id="zip" type="text" value={this.state.zip} onChange={this.onInputChange.bind(this)} placeholder="Zip" />

                <label htmlFor="state">State</label>
                <input id="state" type="text" value={this.state.state} onChange={this.onInputChange.bind(this)} placeholder="State" />

                <label htmlFor="beds">Number of bedrooms</label>
                <input id="beds" type="text" value={this.state.beds} onChange={this.onInputChange.bind(this)} placeholder="Bedrooms" />

                <label htmlFor="baths">Number of bathrooms</label>
                <input id="baths" type="text" value={this.state.baths} onChange={this.onInputChange.bind(this)} placeholder="Bathrooms" />

                <label htmlFor="sqft">Covered square footage</label>
                <input id="sqft" type="text" value={this.state.sqft} onChange={this.onInputChange.bind(this)} placeholder="sqft" />

                <label htmlFor="price">Selling price</label>
                <input id="price" type="text" value={this.state.price} onChange={this.onInputChange.bind(this)} placeholder="Price" />

                <br />

                <button type="submit" className="pure-button pure-button-primary">Add</button>
                </fieldset>
            </form>
        </div>
    )
  }
}

export default AddPropertyForm
