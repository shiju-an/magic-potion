import React from 'react';

// const quantities = [1, 2, 3];

const ItemForm = ({
  quantity, total, onChange
}) => (
  <div>
      <label>
        Item Quantity:
      </label>
      <select 
        id='quantityInput'
        name='quantity'
        onChange={onChange}
      >
        {[0, 1, 2, 3].map(quantity => (
          <option value={quantity}>{quantity}</option>
        ))}
      </select>     
      
      <div>
        Total:
      </div>
      <div
        id='totalInput'
        name='total'
      >
        {total}
      </div>

  </div>
);

export default ItemForm; 