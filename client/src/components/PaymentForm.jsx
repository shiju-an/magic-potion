import React from 'react';

const PaymentForm = ({
  ccNum, expMM, expYY, onChange,
  validateCCNum, validateExp, handleSubmit, isDisabled
}) => (
  <div className="formContainer">
    <h2 id="title">PAYMENT INFO</h2>
    <div className="titleContainer"></div>

    <div className="formBox">
      <form className="form">
        <div className="formField">
          <label className="formDesc">
            Credit Card Number: 
          </label>
          <input 
            className="formInput"
            id='ccNumInput'
            name='ccNum'
            type='text' 
            placeholder='Credit Card Number'
            value={ccNum}
            onChange={onChange}
            onBlur={validateCCNum}
          />
        </div>

        <div className="formField">
          <label className="formDesc">
            Expiration Date: 
          </label>
          <div className="inlineFormInput" id="expDateInput">
          <input 
            id='expMMInput'
            name='expMM'
            type='text' 
            placeholder='MM'
            value={expMM}
            onChange={onChange}
            onBlur={validateExp}
          /> 
          /20
          <input 
            id='expYYInput'
            name='expYY'
            type='text' 
            placeholder='YY'
            value={expYY}
            onChange={onChange}
            onBlur={validateExp}
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
    
    <div className="bottomArrows">
      <button 
        id="submit"
        onClick={handleSubmit}
        disabled={isDisabled()}
      >
        Order
      </button>
    </div>

  </div>
);

export default PaymentForm; 