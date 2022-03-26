import React from 'react';
import './Cart.css'
const Cart = (props) => {
  const {cart} = props;
  return (
    <div className="items">
      <h1>Seletecd Items</h1>
      <div>
        {
          cart.map((item) => (
            <div className="item" key={item.id} cart={cart}>
              <img src={item.picture} alt="" />
              <p>{item.name}</p>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default Cart;