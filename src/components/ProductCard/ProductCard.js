import React from 'react'
import './ProductCard.css'
import Count from '../ItemCount/ItemCount';
import ItemDetails from '../ItemList/Item';

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
      <div className='cardProduct'>
        <img src={props.src}/>
        <div>
          <Brand/> 
          <Title/>
          <Price/>
          <Count stock={props.stock} id={props.id}/>
          <ItemDetails/>
        </div>
      </div> 
      )
    }
  
  export default ProductCard;