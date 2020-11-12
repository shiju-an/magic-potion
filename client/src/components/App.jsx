import React from 'react';
import axios from 'axios';
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
      expMM: '',
      expYY: '',
      isValidName: false,
      // isValidEmail: false,
      isValidPhone: false,
      // isValidStreet1: false,
      // isValidCity: false,
      isValidState: false,
      isValidZip: false,
      isValidQuantity: false,
      isValidTotal: false,
      isValidCcNum: false,
      isValidExpMM: false,
      isValidExpYY: false,
      isDisabled: false
    };

    this.validateName = this.validateName.bind(this);
    this.validatePhoneNumber = this.validatePhoneNumber.bind(this);
    this.validateState = this.validateState.bind(this);
    this.validateZip = this.validateZip.bind(this);
    this.validateQuantity = this.validateQuantity.bind(this);
    this.validateCCNum = this.validateCCNum.bind(this);
    this.validateExp = this.validateExp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTotalChange = this.handleTotalChange.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  validateName(e) {
    let value = e.target.value;
    let validChars = /^[ a-zA-Z\-\’]+$/;

    if (value.match(validChars)) {
      this.setState({isValidName: true});
    }  
    else {  
      this.setState({isValidName: false});
      console.log('Please enter a valid name');
    };
  };

  validatePhoneNumber(e) {
    let value = e.target.value;
    let validChars = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    if (value.match(validChars)) {
      this.setState({isValidPhone: true});    
    } else {  
      this.setState({isValidPhone: false});    
      console.log('Please enter a valid phone number');
    };
  };

  validateState(e) {
    let value = e.target.value;

    if (value === '') { 
      this.setState({isValidState: false});    
      console.log('Please enter a valid state');
    } else {
      this.setState({isValidState: true});    
    }
  };

  validateZip(e) {
    let value = e.target.value;
    let validChars = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

    if(value.match(validChars)) { 
      this.setState({isValidZip: true});    
    } else {
      this.setState({isValidZip: false});    
      console.log('Please enter a valid zip code');
    };
  };

  validateQuantity(e) {
    let value = e.target.value;

    if (value === '0' || value === '') {
      this.setState({isValidQuantity: false});
      this.setState({isValidTotal: false});
      console.log('Please enter a valid quantity');
    } else {
      this.setState({isValidQuantity: true});
      this.setState({isValidTotal: true});
    }
  }

  validateCCNum(e) {
    let value = e.target.value;
    let validAmex = /^(?:3[47][0-9]{13})$/;
    let validVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    let validMaster = /^(?:5[1-5][0-9]{14})$/;
    let validDiscover = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    let validDinerClub = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
    let validJCB = /^(?:(?:2131|1800|35\d{3})\d{11})$/;
    let cardType = null;
    let isValid = this.setState({isValidCcNum: true});    

    if (value.match(validAmex)) {
      cardType = "American Express";
      isValid;
    } else if (value.match(validVisa)) {
      cardType = "Visa";
      isValid;
    } else if (value.match(validMaster)) {
      cardType = "Master";
      isValid;
    } else if (value.match(validDiscover)) {
      cardType = "Discover";
      isValid;
    } else if (value.match(validDinerClub)) {
      cardType = "Diner Club"; 
      isValid;
    } else if (value.match(validJCB)) {
      cardType = "JCB";
      isValid;
    } else {
      this.setState({isValidCcNum: false})
      console.log('Please enter a valid credit card number');
    }

    console.log(cardType)
  };

  validateExp(e) {
    let value = e.target.value;
    let validMonths = /^(0[1-9]|1[0-2])$/;
    let validYears = /\d{2}/
    let today = new Date();
    let expDate = new Date(); 
    expDate.setFullYear('20' + this.state.expYY, this.state.expMM - 1, 1);
      
    if (e.target.name === 'expMM') {
      if (value.match(validMonths)) {
        this.setState({isValidExpMM: true});    
      } else {
        this.setState({isValidExpMM: false});    
        console.log('Please enter a valid month');
      };
    };
    
    if (e.target.name === 'expYY') {
      if (value.match(validYears)) {
        this.setState({isValidExpYY: true});  
      } else {  
        this.setState({isValidExpYY: false});  
        console.log('Please enter a valid year');
      };
    };

    if (this.state.expYY && this.state.expMM && expDate < today) {
      this.setState({isValidExpYY: false});  
      console.log('This card is expired. Please enter a valid card.');
    };
  };

  isDisabled() {
    console.log('disabled');
    let {isValidName, isValidPhone, isValidState, isValidZip, isValidQuantity, isValidTotal, isValidCcNum, isValidExpMM, isValidExpYY } = this.state;

    if (isValidName && isValidPhone && isValidState && isValidZip && isValidQuantity && isValidTotal && isValidCcNum && isValidExpMM && isValidExpYY) {
      console.log('enabled');
      return true;
    };
    return false;
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

  handleSubmit(e) {
    e.preventDefault();

    let { firstName, lastName, email, phone, street1, street2, city, state, zip, quantity, total, ccNum, expMM, expYY } = this.state; 

    axios.post('/api/magic', { firstName, lastName, email, phone, street1, street2, city, state, zip, quantity, total, ccNum, expMM, expYY }) 
      .then((result => {
        console.log(result, 'added');
      }))
      .catch(err => console.log('error post ', err))
  }

  render() {
    let {isValidName, isValidPhone, isValidState, isValidZip, isValidQuantity, isValidTotal, isValidCcNum, isValidExpMM, isValidExpYY } = this.state;
    let enableOrder = isValidName && isValidPhone && isValidState && isValidZip && isValidQuantity && isValidTotal && isValidCcNum && isValidExpMM && isValidExpYY;
    
    return (
      <div>
        <h1>magic potion</h1>
        <h3>bubble bubble boil and trouble</h3>
        <ContactForm 
          firstName={this.state.firstName}
          lastName={this.state.lastName}git s
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
          total={this.state.total}
          onChange={this.handleTotalChange}
          validateQuantity={this.validateQuantity}
        /> 

        <PaymentForm 
          ccNum={this.state.ccNum}
          expMM={this.state.expMM}
          expYY={this.state.expYY}
          onChange={this.handleInputChange}
          validateCCNum={this.validateCCNum}
          validateExp={this.validateExp}
        /> 

        <button 
          onClick={this.handleSubmit}
          disabled={!this.isDisabled()}
        >
          Order
        </button>
      </div>
    )
  }

}

export default App;

//validation does not validate on autocomplete