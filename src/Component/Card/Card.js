import React, {useState, useEffect} from 'react';
import Product from "./../Product/Product";
import './Card.css'
const Card = () => {
  const [products, setProducts] = useState([])
  
  useEffect( ()=>{
    console.log("Products load before fetch")
    
    fetch('product.json')
    .then(res=>res.json())
    .then(data => {
      setProducts(data);
      console.log(data) 
      // console.log("products loaded")
    }) 
  } , [])
  return (
    <div>
        <div className="shop-container card">
            <div className="products-container">
              {
                products.map(product => <Product key={product.id} product={product}  />)
              }
            </div>
            
            <div className="cart-container">
              {/* <Cart cart={cart}></Cart> */}
            </div>
        </div>
    </div>
  );
};

export default Card;