import React from 'react';

// const quantities = [1, 2, 3];

const ItemForm = ({
  quantity, total, onChange, validateQuantity
}) => (
  <div className='productContainer'>
    <div id="productImage">

    </div>

    <div id="productForm">
      <div className="itemContainer">
        <p id="price">$49.99</p> 
      </div>
      
      <div>
        <label>
          Item Quantity:
        </label>
        <select 
          id='quantityInput'
          name='quantity'
          onChange={onChange}
          onBlur={validateQuantity}
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
    </div>
  </div>
);

export default ItemForm; 