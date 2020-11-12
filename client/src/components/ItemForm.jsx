import React from 'react';
import potion from '../media/potion.png';


const ItemForm = ({
  quantity, total, onChange, validateQuantity, onClick
}) => (
  <div className='productContainer'>

    <div id="productImage">
      <div className="imageBackground">
        <img src = {potion} alt="potion" />
      </div>

    </div>

    <div id="productForm">
      <div className="itemContainer">
        <p id="price">$49.99</p> 
      </div>

      <div className="itemContainer" id="combineTwo">
        {/* <label>
          Item Quantity:
        </label> */}
        <div className="innerContainer">
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
        </div>   
      {/* </div>

      <div
        className="itemContainer"
        id='totalInput'
        name='total'
      > */}
        <p id="totalInput" name='total'>${total}</p>
      </div>
      
      <div className="itemContainer">
        <button 
          id="continueToInfo"
          onClick={onClick}>Continue</button>
      </div>
    </div>

  </div>
);

export default ItemForm; 