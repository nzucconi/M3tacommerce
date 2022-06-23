import React from 'react';

function ProductCard (props) {

  const Brand = () => (
    <h3>{props.brand}</h3>
  );
  
  const Title = () => (
    <h4>{props.title}</h4>
  );
  
  const Price = () => (
    <h3>{props.price}</h3>
  );

  return (
      <div>
        <img src="" alt=""/>
        <div>
          <Brand/> 
          <Title/>
          <Price/>
        </div>
        <button>Add to cart</button>
      </div> 
      )
    }
  
  export default ProductCard;