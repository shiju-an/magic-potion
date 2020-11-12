import React from 'react';

const ContactForm = ({
  firstName, lastName, email, phone, onChange,
  validateName, validatePhoneNumber
}) => (
  <div className="formContainer">
    <div className="titleContainer">
      <h2>USER INFO</h2>>
    </div>
    <form>
      <label>
        First Name: 
      </label>
      <input 
        id='firstNameInput'
        name='firstName'
        type='text' 
        placeholder='First Name'
        value={firstName}
        onChange={onChange}
        onBlur={validateName}
      />

      <label>
        Last Name: 
      </label>
      <input 
        id='lastNameInput'
        name='lastName'
        type='text' 
        placeholder='Last Name'
        value={lastName}
        onChange={onChange}
        onBlur={validateName}
      />

      <label>
        Email:
      </label>
      <input 
        id='emailInput'
        name='email'
        type='email' 
        placeholder='Email Address'
        value={email}
        onChange={onChange}
      />         

      <label>
        Phone Number:
      </label>
      <input 
        id='phoneInput'
        name='phone'
        type='text' 
        placeholder='Phone Number'
        value={phone}
        onChange={onChange}
        onBlur={validatePhoneNumber}
      />      
    </form>
  </div>
);

export default ContactForm; 