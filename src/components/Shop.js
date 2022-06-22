import React from 'react';

function ProductCard(props) {
    return (
      <div id="shop">
        <div> 
          <div>
            <img src="" alt=""/>
            <div>
              <p>{props.brand} {props.item}</p>
              <p>US$ {props.price}</p>
            </div>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    )
  };
  
  export default ProductCard;