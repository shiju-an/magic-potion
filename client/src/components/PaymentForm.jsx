import React from 'react';

const PaymentForm = ({
  ccNum, expMM, expYY, onChange,
  validateCCNum, validateExp  
}) => (
  <div>
    <form>
      <label>
        Credit Card Number: 
      </label>
      <input 
        id='ccNumInput'
        name='ccNum'
        type='text' 
        placeholder='Credit Card Number'
        value={ccNum}
        onChange={onChange}
        onBlur={validateCCNum}
      />

      <label>
        Expiration Date: 
      </label>
      <input 
        id='expMMInput'
        name='expMM'
        type='text' 
        placeholder='MM'
        value={expMM}
        onChange={onChange}
        onBlur={validateExp}
      /> 
      / 20 
      <input 
        id='expYYInput'
        name='expYY'
        type='text' 
        placeholder='YY'
        value={expYY}
        onChange={onChange}
        onBlur={validateExp}
      />
    </form>
  </div>
);

export default PaymentForm; 