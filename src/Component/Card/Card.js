import React, {useState, useEffect} from 'react';
import Product from "./../Product/Product";
import './Card.css'
import Cart from "./../Cart/Cart";
const Card = () => {
  const [products, setProducts] = useState([])
  const [item, setItem] = useState([])
  let [choosen, setChoosen] = useState([])
  
  useEffect( ()=>{
    // console.log("Products load before fetch")
    fetch('product.json')
    .then(res=>res.json())
    .then(data => {
      setProducts(data);
      // console.log(data) 
      // console.log("products loaded")
    }) 
  } , [])




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
    // console.log(newItem)
  }

  const clearAll = () => {
    let emptyCart = []
    setItem(emptyCart)
    setChoosen(emptyCart)
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
    // console.log(choosen)
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

              <div>
                
                {
                  choosen.length !== 0 &&  <div>
                      <h1 className="choose-heading">Choosen Item</h1>
                      <div className="choosen">
                        <img src={choosen.picture} alt=" " />
                        <h3>{choosen.name}</h3>
                      </div>
                  </div>
                }
                
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