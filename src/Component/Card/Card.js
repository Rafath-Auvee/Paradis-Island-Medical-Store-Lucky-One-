import React, {useState, useEffect} from 'react';
import Product from "./../Product/Product";
import './Card.css'
import Cart from "./../Cart/Cart";
const Card = () => {
  const [products, setProducts] = useState([])
  const [item, setItem] = useState([])
  const [choosen, setChoosen] = useState([])
  
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


//   const handleAddtoCart = (selectedHeadphone) => {
//     let newCart = []
//     const exist = cart.find(headphone=> headphone.id === selectedHeadphone.id)
//     if(cart.length>3){
//         alert("Only 4 items are accepted")
//         newCart = [...cart]
//     }
//     else if(!exist){
//         newCart = [...cart, selectedHeadphone];
//     }
//     else{
//         newCart = [...cart]
//     }

//     setCart(newCart);
// }

  const handleItem = (selectedProduct) => {
    let newItem = []
    const exist = item.find(drug=> drug.id === selectedProduct.id)
    if(item.length>3){
        alert("Only 4 items are accepted")
        newItem = [...item]
    }
    else if(!exist){
        newItem = [...item, selectedProduct];
    }
    else{
        newItem = [...item]
    }
    setItem(newItem)
    console.log(newItem)
  }

  const clearAll = () => {
    let emptyCart = []
    setItem(emptyCart)
  }

  const chooseOne = () =>{
    if(item.length === 0)
    {
        alert("Cart Empty")
        window.location.reload()
    }
    const index = Math.floor(Math.random() * 10) % (item.length);
    choosen = item[index]
    setChoosen(choosen)
    
  }

  return (
    <div>
        <div className="shop-container card">
            <div className="products-container">
              {
                products.map(product => <Product key={product.id} product={product} handleItem = {handleItem} />)
              }
            </div>
            <div className="cart-container">
              <Cart cart={item}></Cart>

              <div className="choosen">
                
              </div>

              <div className="buttons">
                <button onClick={chooseOne}>Choose One Only</button>
                <button onClick={clearAll}>Clear All</button>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Card;