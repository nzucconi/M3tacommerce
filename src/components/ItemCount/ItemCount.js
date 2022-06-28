import React from 'react';
import "./ItemCount.css";
import { useState } from 'react';

function Count({stock, initial}) {

    const total = 0

    const [num, setNum] = useState(0);

    const removeItem = () => {
        if(num>initial) {
        setNum(num - 1)
        }
    }

    const addItem = () => {
        if(num<10)
        setNum(num + 1)
    }

    const addToCart = () => {
    }

    return(
        <div className="countBox">
            <div className="changeItemBox">
                <button onClick={removeItem} className="changeItem">-</button>
                <p>{num}</p>
                <button onClick={addItem} className="changeItem">+</button>
            </div>
            <div className="addToCartButtonBox">
                <button onClick={addToCart} className="addItemButton">Add to Cart</button>
                <p>Available remaining products {stock - num}</p>
            </div>
        </div>
    )
};

export default Count;