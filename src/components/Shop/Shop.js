import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Shop.css'

function Shop() {
    return(
      <div className="mainBanner">
        <ProductCard brand="Cap Stelix" title="Unisex" price="34" src="media/cap1.jpeg"/>
        <ProductCard brand="Cap Stelix" title="Col Adu" price="34" src="media/cap1.jpeg"/>
        <ProductCard brand="Cap Stelix" title="Crew Family" price="65" src="media/cap1.jpeg"/>
      </div>
      )
  };
  
  export default Shop;