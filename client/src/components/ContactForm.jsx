import React from 'react';

const ContactForm = ({
  firstName, lastName, email, phone, onChange
}) => (
  <div>
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
      />       
    {/* 
      <label>
        Address Line 1: 
      </label>
      <input 
        id='addressLineOneInput'
        name='addressLineOne'
        type='text' 
        placeholder='Address Line 1'
        value=''
      />

      <label>
        Address Line 2: 
      </label>
      <input 
        id='addressLineTwoInput'
        name='addressLineTwo'
        type='text' 
        placeholder='Address Line 2'
        value=''
      />    

      <label>
        City:
      </label>
      <input 
        id='cityInput'
        name='city'
        type='text' 
        placeholder='City'
        value=''
      />    

      <label>
        State:   
      </label>
      <select 
        id='stateInput'
        name='state'
        type='' 
        placeholder='State'
      >
        <option value='NY'>NY</option>
        <option value='CA'>CA</option>
        <option value='NC'>NC</option>
      </select>

      <label>
        Zip Code:
      </label>
      <input 
        id='zipCodeInput'
        name='zipCode'
        type='text' 
        placeholder='Zip Code'
        value=''
      />             */}
    </form>
  </div>
);

export default ContactForm; 