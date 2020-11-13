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
      isValidPhone: false,
      isValidState: false,
      isValidZip: false,
      isValidQuantity: false,
      isValidCcNum: false,
      isValidExpMM: false,
      isValidExpYY: false,
      isDisabled: true,
      currentPage: 0
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
    this.disableSubmit = this.disableSubmit.bind(this);
    this.disableNext = this.disableNext.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

//validation
  validateName(e) {
    let value = e.target.value;
    let validChars = /^[ a-zA-Z\-\’]+$/;

    if (value.match(validChars)) {
      this.setState({isValidName: true});
    }  

    this.setState({isValidName: false});
    // alert('Please enter a valid name');
  };

  validatePhoneNumber(e) {
    let value = e.target.value;
    let validChars = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    if (value.match(validChars)) {
      this.setState({isValidPhone: true});    
    } 

    this.setState({isValidPhone: false});    
    // alert('Please enter a valid phone number');
  };

  validateState(e) {
    let value = e.target.value;

    if (value === '') { 
      this.setState({isValidState: false});    
      alert('Please enter a valid state');
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
      alert('Please enter a valid zip code');
    };
  };

  validateQuantity(e) {
    let value = e.target.value;

    if (value === '0' || value === '') {
      this.setState({isValidQuantity: false});
      // alert('Please enter a valid quantity');
    } 
    
    this.setState({isValidQuantity: true});
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
      alert('Please enter a valid credit card number');
    }
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
        alert('Please enter a valid month');
      };
    };
    
    if (e.target.name === 'expYY') {
      if (value.match(validYears)) {
        this.setState({isValidExpYY: true});  
      } else {  
        this.setState({isValidExpYY: false});  
        alert('Please enter a valid year');
      };
    };

    if (this.state.expYY && this.state.expMM && expDate < today) {
      this.setState({isValidExpYY: false});  
      alert('This card is expired. Please enter a valid card.');
    };
  };

//disable buttons
  disableSubmit() {
    let {isValidName, isValidPhone, isValidState, isValidZip, isValidQuantity, isValidCcNum, isValidExpMM, isValidExpYY } = this.state;

    if (isValidName && isValidPhone && isValidState && isValidZip && isValidQuantity && isValidCcNum && isValidExpMM && isValidExpYY) {
      console.log('enabled');
      return false;
    };
    return true;
  };

  disableNext() {
    let {currentPage, isValidName, isValidPhone, isValidState, isValidZip, isValidQuantity } = this.state;
    if (currentPage === 0 && isValidQuantity) {
      console.log('enabled');
      return false;
    }
    
    if (currentPage === 1 && isValidPhone && isValidName) {
        console.log('enabled');
        return false;
    } 
    
    if (currentPage === 2 && isValidState && isValidZip) {
        console.log('enabled');
        return false;    
    } 

    return true;
  }
  
//handle inputs
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

//handle buttons
  handleNext(e) {
    e.preventDefault(); 

    let {currentPage, isValidName, isValidPhone, isValidState, isValidZip, isValidQuantity } = this.state;

    if (currentPage === 0 && isValidQuantity) {
      this.setState({currentPage: this.state.currentPage + 1} , () => {console.log(this.state.currentPage)})
    } else {
      alert('Please enter a valid quantity');
    };

    if (currentPage === 1 && isValidName && isValidPhone) {
      this.setState({currentPage: this.state.currentPage + 1} , () => {console.log(this.state.currentPage)})
    } else if (!isValidName) {
      alert('Please enter a valid name');
    } else {
      alert('Please enter a valid phone number');
    }
    
    // if (currentPage === 1 && isValidPhone && isValidName) {
    //     console.log('enabled');
    //     return false;
    // } 
    
    // if (currentPage === 2 && isValidState && isValidZip) {
    //     console.log('enabled');
    //     return false;    
    // } 

    // return true;

  };

  handleBack(e) {
    e.preventDefault(); 

    this.setState({currentPage: this.state.currentPage - 1} , () => {console.log(this.state.currentPage)})
  };

  handleSubmit(e) {
    e.preventDefault();

    let { firstName, lastName, email, phone, street1, street2, city, state, zip, quantity, total, ccNum, expMM, expYY } = this.state; 

    axios.post('/api/magic', { firstName, lastName, email, phone, street1, street2, city, state, zip, quantity, total, ccNum, expMM, expYY }) 
      .then((result => {
        alert("Your order has been placed!");
      }))
      .catch(err => {
        if (err.response.status === 400) {
          console.log(err.response, typeof err.response)
          alert("Error: Unable to Process Order")
        } else if (err.response.status === 401 ) {
          alert("Error: Magic potion order may not exceed maximum quantity")
        } else {
          console.log(err);
        };
      });
  }

  
  render() {
    let { currentPage } = this.state;

    if (currentPage === 0) {
      return <ItemForm 
        quantity={this.state.quantity}
        total={this.state.total}
        onChange={this.handleTotalChange}
        validateQuantity={this.validateQuantity}
        handleNext={this.handleNext}
        disableNext={this.disableNext}
      /> 
    } else if (currentPage === 1) {
      return <ContactForm 
        firstName={this.state.firstName}
        lastName={this.state.lastName}git s
        email={this.state.email}
        phone={this.state.phone}
        onChange={this.handleInputChange}
        validateName={this.validateName}
        validatePhoneNumber={this.validatePhoneNumber}
        handleBack={this.handleBack}
        handleNext={this.handleNext}
        disableNext={this.disableNext}
      /> 
    } else if (currentPage === 2) {
      return <AddressForm 
        street1={this.state.street1}
        street2={this.state.street2}
        city={this.state.city}
        state={this.state.state}
        zip={this.state.zip}
        onChange={this.handleInputChange}
        validateState={this.validateState}
        validateZip={this.validateZip}
        handleBack={this.handleBack}
        handleNext={this.handleNext}
        disableNext={this.disableNext}
      /> 
    } else {
      return <PaymentForm 
        ccNum={this.state.ccNum}
        expMM={this.state.expMM}
        expYY={this.state.expYY}
        onChange={this.handleInputChange}
        validateCCNum={this.validateCCNum}
        validateExp={this.validateExp}
        handleBack={this.handleBack}
        handleSubmit={this.handleSubmit}
        disableSubmit={this.disableSubmit}
      /> 
    }
  }
}

export default App;

//validation does not validate on autocomplete