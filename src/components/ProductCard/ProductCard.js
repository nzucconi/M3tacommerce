import React from 'react';
import './ProductCard.css'
import ItemCount from '../ItemCount/ItemCount';

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
      <div className="cardProduct">
        <img src={props.src}/>
        <div>
          <Brand/> 
          <Title/>
          <Price/>
          <ItemCount stock="10" initial="1"/>
        </div>
      </div> 
      )
    }
  
  export default ProductCard;