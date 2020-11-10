import React from 'react';

import ContactForm from './ContactForm.jsx';
import AddressForm from './AddressForm.jsx';
import ItemForm from './ItemForm.jsx';
import PaymentForm from './PaymentForm.jsx';


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
      total: '0',
      ccNum: '',
      exp: '',
    };

    this.validateName = this.validateName.bind(this);
    this.validatePhoneNumber = this.validatePhoneNumber.bind(this);
    this.validateState = this.validateState.bind(this);
    this.validateZip = this.validateZip.bind(this);
    this.validateCCNum = this.validateCCNum.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTotalChange = this.handleTotalChange.bind(this);
  };

  validateName(e) {
    let value = e.target.value;
    let isValid = false;
    let validChars = /^[ a-zA-Z\-\’]+$/;

    if (value.match(validChars)) {
      isValid = true; 
    }  
    else {  
      console.log('Please enter a valid name');
    };
  };

  validatePhoneNumber(e) {
    let value = e.target.value;
    let isValid = false;
    let validChars = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    if(value.match(validChars)) {
      isValid = true; 
    }  
    else {  
      console.log('Please enter a valid phone number');
    };
  };

  validateState(e) {
    let value = e.target.value;

    if(value === '') { 
      console.log('Please enter a valid state');
    };
  };

  validateZip(e) {
    let value = e.target.value;
    let validChars = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

    if(!value.match(validChars)) { 
      console.log('Please enter a valid zip code');
    };
  };

  validateCCNum(e) {
    let value = e.target.value;
    let validAmex = /^(?:3[47][0-9]{13})$/;
    let validVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    let validMaster = /^(?:5[1-5][0-9]{14})$/;
    let validDiscover = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    let validDinerClub = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
    let validJCB = /^(?:(?:2131|1800|35\d{3})\d{11})$/;
    let cardType = null;

    if (value.match(validAmex)) {
      cardType = "American Express";
    } else if (value.match(validVisa)) {
      cardType = "Visa";
    } else if (value.match(validMaster)) {
      cardType = "Master";
    } else if (value.match(validDiscover)) {
      cardType = "Discover";
    } else if (value.match(validDinerClub)) {
      cardType = "Diner Club"; 
    } else if (value.match(validJCB)) {
      cardType = "JCB";
    } else {
      console.log('Please enter a valid credit card number');
    }
    
    console.log(cardType)
  };

  handleInputChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  handleTotalChange(e) {
      let name = e.target.name;
      let value = e.target.value;
  
      this.setState({
        [name]: value
      }, () => {
        this.setState({total: 49.99 * this.state.quantity})
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
          validateName={this.validateName}
          validatePhoneNumber={this.validatePhoneNumber}
          /> 

        <AddressForm 
          street1={this.state.street1}
          street2={this.state.street2}
          city={this.state.city}
          state={this.state.state}
          zip={this.state.zip}
          onChange={this.handleInputChange}
          validateState={this.validateState}
          validateZip={this.validateZip}
        /> 

        <ItemForm 
          quantity={this.state.quantity}
          onChange={this.handleTotalChange}
          total={this.state.total}
        /> 

        <PaymentForm 
          ccNum={this.state.ccNum}
          exp={this.state.exp}
          onChange={this.handleInputChange}
          validateCCNum={this.validateCCNum}
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

//validation base 
//validate names = strings only
//validate email = email only
//validate number = number + 10 digits only
//address = strings only
//zip = number + five digits only
//credit card number = number +  max numbers only
//expiration date = MM/YY only 

