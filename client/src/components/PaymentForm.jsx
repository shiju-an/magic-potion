import React from 'react';

const PaymentForm = ({
  ccNum, exp, onChange,
  validateCCNum
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
        id='expInput'
        name='exp'
        type='text' 
        placeholder='Expiration Date'
        value={exp}
        onChange={onChange}
      />
    </form>
  </div>
);

export default PaymentForm; 