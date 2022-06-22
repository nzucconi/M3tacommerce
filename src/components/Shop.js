import React from 'react';

function ProductCard({ brand , item, price }) {
    return (
      <div id="shop">
        <div> 
          <div>
            <img src="" alt=""/>
            <div className="temporal2">
              <p>{brand} {item}</p>
              <p>US$ {price}</p>
            </div>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    )
  };
  
  export default ProductCard;