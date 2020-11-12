import React from 'react';
import States from '../../../states.js'

const AddressForm = ({
  street1, street2, city, state, zip, onChange,
  validateState, validateZip
}) => (
  <div className="formContainer">
    <h2 id="title">SHIPPING INFO</h2>
    <div className="titleContainer"></div>
    
      <div className="formBox">
      
      <form>
        <div className="formField">
          <label className="formDesc">
            Address Line 1: 
          </label>
          <input 
            className="formInput"
            id='street1Input'
            name='street1'
            type='text' 
            // placeholder='Address Line 1'
            value={street1}
            onChange={onChange}
          />
        </div>

        <div className="formField">
          <label className="formDesc">
            Address Line 2: 
          </label>
          <input
            className="formInput" 
            id='street2Input'
            name='street2'
            type='text' 
            // placeholder='Address Line 2'
            value={street2}   
            onChange={onChange}
          />    
        </div>

        <div className="formField">
          <label              
            className="combinedAddressLine"
            id="cityLabel">
            City
          </label>

          <label 
            className="combinedAddressLine"
            id="stateLabel">
            State
          </label>
          
          <label 
            className="combinedAddressLine"
            id="zipLabel">
            Zip
          </label>

          <div className="inlineFormInput">
            <input 
              id='cityInput'
              name='city'
              type='text' 
              // placeholder='City'
              value={city}
              onChange={onChange}
            />    

            {/* <label>
              State:   
            </label> */}
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

            {/* <label>
              Zip Code:
            </label> */}
            <input 
              id='zipInput'
              name='zip'
              type='text' 
              // placeholder='Zip Code'
              value={zip}
              onChange={onChange}
              onBlur={validateZip}
            />   
          </div>
        </div>    

      </form>
    </div>

    <div className="bottomArrows">
      <button 
        id="next">Next</button>
    </div>

    <div className="bottomArrows">
      <button 
        id="back">Back</button>
    </div>
  </div>
);

export default AddressForm; 