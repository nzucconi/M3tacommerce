import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Shop.css'

function Shop() {
    return(
      <div className="mainBanner">
        <ProductCard brand="Cap Stelix" title="Unisex" price="34" src="media/cap1.jpeg" stock="10" />
        <ProductCard brand="Cap Stelix" title="Col Adu" price="34" src="media/cap1.jpeg" stock="10"/>
        <ProductCard brand="Cap Stelix" title="Crew Family" price="65" src="media/cap1.jpeg" stock="10"/>
      </div>
      )
  };
  
  export default Shop;