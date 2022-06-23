import React from 'react';
import ProductCard from './ProductCard';

function Shop() {
    return(
      <div>
        <ProductCard brand="Hello" title="Unisex Kids and Adult" price="34"/>
        <ProductCard brand="Flexfit Screenish" title="Unisex Kids and Adult" price="34"/>
        <ProductCard brand="Flexfit Screenish" title="Crew Cap" price="65"/>
      </div>
      )
  };
  
  export default Shop;