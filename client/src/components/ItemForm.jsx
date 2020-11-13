import React from 'react';


const ItemForm = ({
  quantity, total, onChange, validateQuantity, disableNext, handleNext
}) => (
  <div className='productContainer'>

    <div id="productImage">
      <div className="imageBackground">
        <img src='https://jw-challenges.s3.us-east-2.amazonaws.com/potion.png' alt="potion" />
      </div>

    </div>

    <div id="productForm">
      <div className="itemContainer">
        <p id="price">$49.99</p> 
      </div>

      <div className="itemContainer" id="combineTwo">
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

        <p id="totalInput" name='total'>${total}</p>
      </div>
      
      <div className="itemContainer">
        <button 
          id="continueToInfo"
          onClick={handleNext}
          disabled={disableNext()}  
        >
          Continue
        </button>
      </div>
    </div>

  </div>
);

export default ItemForm; 