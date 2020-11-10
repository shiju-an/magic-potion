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
    </form>
  </div>
);

export default ContactForm; 