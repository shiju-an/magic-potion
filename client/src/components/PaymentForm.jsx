import React from 'react';

const PaymentForm = ({
  ccNum, expMM, expYY, onChange,
  validateCCNum, validateExp, handleBack, handleSubmit, disableSubmit
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
            maxLength='16'
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
            maxLength='2'
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
            maxLength='2'
          />
          </div>
        </div>
      </form>
    </div>

    <div className="bottomArrows">
      <button 
        id="submit"
        onClick={handleSubmit}
        disabled={disableSubmit()}
      >
        Order
      </button>
    </div>

    <div className="bottomArrows">
      <button 
        id="back"
        onClick={handleBack}
      >
        Back
      </button>
    </div>
    
    {/* <div className="bottomArrows">
      <button 
        id="submit"
        onClick={handleSubmit}
        disabled={disableSubmit()}
      >
        Order
      </button>
    </div> */}

  </div>
);

export default PaymentForm; 