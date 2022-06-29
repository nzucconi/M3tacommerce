import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Shop.css'

function Shop() {
    return(
      <div className="mainBanner">
        <ProductCard brand="Cap Stelix" title="Unisex" price="34" src="media/cap1.jpeg" stock={10} id={1}/>
      </div>
      )
  };
  
  export default Shop;