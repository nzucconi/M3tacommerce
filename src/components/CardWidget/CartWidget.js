import React from 'react';
import './CardWidget.css';

function CartWidget() {
    return(
        <div>
            <div className="nav-item">
                <a className="nav-link" href="index.html"></a>
                <img className="cartIcon" src="media/carticon.jpg" width="40" alt="Cart Logo"/>
            </div>
        </div>
      )
  };
  
  export default CartWidget;