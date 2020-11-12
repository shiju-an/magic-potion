import React from 'react';

const ContactForm = ({
  firstName, lastName, email, phone, onChange,
  validateName, validatePhoneNumber
}) => (
  <div className="formContainer">
    <h2 id="title">USER INFO</h2>
    <div className="titleContainer"></div>

    <div className="formBox">
      <form>
        <div className="formField">
          <label className="formDesc">
            First Name: 
          </label>
          <input 
            className="formInput"
            id='firstNameInput'
            name='firstName'
            type='text' 
            // placeholder='First Name'
            value={firstName}
            onChange={onChange}
            onBlur={validateName}
          />
        </div>

        <div className="formField">
          <label className="formDesc">
            Last Name: 
          </label>
          <input 
            className="formInput"
            id='lastNameInput'
            name='lastName'
            type='text' 
            // placeholder='Last Name'
            value={lastName}
            onChange={onChange}
            onBlur={validateName}
          />
        </div>

        <div className="formField">
          <label className="formDesc">
            Email:
          </label>
          <input 
            className="formInput"
            id='emailInput'
            name='email'
            type='email' 
            // placeholder='Email Address'
            value={email}
            onChange={onChange}
          />         
        </div>

        <div className="formField">
          <label className="formDesc">
            Phone Number:
          </label>
          <input 
            className="formInput"
            id='phoneInput'
            name='phone'
            type='text' 
            // placeholder='Phone Number'
            value={phone}
            onChange={onChange}
            onBlur={validatePhoneNumber}
          />      
        </div>
      </form>
    </div>

    <div className="bottomArrows">
      <button 
        id="next">Next</button>
    </div>
  
  </div>
);

export default ContactForm; 