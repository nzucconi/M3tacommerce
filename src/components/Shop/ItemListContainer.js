import React from 'react';
import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ItemListContainer.css'

function ItemListContainer() {

const [info, setInfo] = useState([])

useEffect(()=> {
	fetch('itemList.json')
  .then( (resp) => resp.json())
	.then( (data) => setTimeout(() => setInfo(data)), 2000)
}, [])

return (
      <div className='listContainer'>
        {info.map(i => <ProductCard product={i.brand} title={i.title} price={i.price} src={i.src} stock={i.stock} id={i.id} /> )}
      </div>
    )
}
  
export default ItemListContainer;