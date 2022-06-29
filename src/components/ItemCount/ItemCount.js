import React, { useState } from 'react';
import "./ItemCount.css";

function Count({id, stock}) {

    let cart = []

    const addToCart = () => {
        if(count <= stock) {
            let itemsInCart = JSON.parse(localStorage.getItem('cart'))
            if(itemsInCart && itemsInCart.length > 0) {
                cart = itemsInCart.filter(item => item.id != id);
                console.log(cart)
            }
            cart.push({id:id, qty:count})
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        else {
            console.log("Limit Exceeded")
        }
    }

    const removeItem = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    const addItem = () => {
        setCount(count + 1)
    }

    const [count, setCount] = useState(1);

    return(
        <div className="countBox">
            <div className="changeItemBox">
                <button onClick={() => removeItem()}>-</button>
                <p>{count}</p>
                <button onClick={() => addItem()}>+</button>
            </div>
            <div className="addToCartButtonBox">
                <button onClick={addToCart} className="addItemButton">Add to Cart</button>
            </div>
        </div>
    )
};

export default Count;