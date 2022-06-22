import React from 'react';
import ProductCard from './Shop';

function Shop() {
    return(
      <div>
        <ProductCard brand="Flexfit Screenish" item="Twill Fitted Cap" price="23"/>
        <ProductCard brand="Flexfit Screenish" item="Unisex Kids and Adult" price="34"/>
        <ProductCard brand="Flexfit Screenish" item="Crew Cap" price="65"/>
      </div>
      )
  };
  
  export default Shop;