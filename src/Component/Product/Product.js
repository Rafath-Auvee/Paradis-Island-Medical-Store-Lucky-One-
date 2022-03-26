import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
  const {name, picture, price} = props.product

  // const {handleAddToCart} = props

  return (
    <div className="product">
      <img src={picture} alt={name} />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p> Price: ${price} </p>
      </div>
      <button className="btn-cart" onClick={() => props.handleAddToCart(props.product)}>
        <p className="btn-text">Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;