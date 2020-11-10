import React from 'react';

import ContactForm from './ContactForm.jsx';
import AddressForm from './AddressForm.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: '',
      quantity: '',
      total: '',
      ccNum: '',
      exp: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  };

  handleInputChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <h1>magic potion</h1>
        <h3>bubble bubble boil and trouble</h3>
        <ContactForm 
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phone={this.state.phone}
          onChange={this.handleInputChange}
          /> 
        <AddressForm 
          street1={this.state.street1}
          street2={this.state.street2}
          city={this.state.city}
          state={this.state.state}
          zip={this.state.zip}
          onChange={this.handleInputChange}
        /> 
      </div>
    )
  }

}

export default App;


//components = 
//contact info - name, email, phone
//address - address 1, 2, city, state, zip 
//item - quantity + total
//payment - credit card, expiration date 