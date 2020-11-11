import React from 'react';
import States from '../../../states.js'

const AddressForm = ({
  street1, street2, city, state, zip, onChange,
  validateState, validateZip
}) => (
  <div>
    <form>
      <label>
        Address Line 1: 
      </label>
      <input 
        id='street1Input'
        name='street1'
        type='text' 
        placeholder='Address Line 1'
        value={street1}
        onChange={onChange}
      />

      <label>
        Address Line 2: 
      </label>
      <input 
        id='street2Input'
        name='street2'
        type='text' 
        placeholder='Address Line 2'
        value={street2}   
        onChange={onChange}
      />    

      <label>
        City:
      </label>
      <input 
        id='cityInput'
        name='city'
        type='text' 
        placeholder='City'
        value={city}
        onChange={onChange}
      />    

      <label>
        State:   
      </label>
      <select 
        id='stateInput'
        name='state'
        onChange={onChange}
        onBlur={validateState}
      >
        <option value=''> </option>
        {States.map(state => (
          <option value={state}>{state}</option>
        ))}
      </select>

      <label>
        Zip Code:
      </label>
      <input 
        id='zipInput'
        name='zip'
        type='text' 
        placeholder='Zip Code'
        value={zip}
        onChange={onChange}
        onBlur={validateZip}
      />            
    </form>
  </div>
);

export default AddressForm; 