import React, { useState } from 'react'
import './Cart.css'
import { Products } from '../data/products.js'

const Cart = () => {
const[generalPrice, setGeneralPrice] = useState(12);
const[quantity, setQuantity] = useState(1);
const[totalPrice, setTotalPrice] = useState(generalPrice);


    function add(){
        setQuantity(prevQuantity => prevQuantity + 1);
        setTotalPrice(prevTotalPrice => prevTotalPrice + generalPrice);
    }
    function subtract(){
        setQuantity(prevQuantity => prevQuantity - 1);
        setTotalPrice(prevTotalPrice => prevTotalPrice - generalPrice)
    }

    function totalPric(){
        setTotalPrice(prevTotal => prevTotal * quantity)
    }

  return (
    <div className='Cart-container' >
      <h2>Selected Products</h2>
      <div className="cart-items">
         <div className="cart-body">
                  { Products.map((products) => (
                    <li key={products.id} className="cartItem">
                      <p>Name: {products.name}</p>
                      <p>Category: {products.category}</p>
                      <p>price: {products.price}</p>
                      <p>Rate: {products.rate}</p>
                      <div className="addtocart">
                        <div className='addbutton'>
                          <button onClick={subtract} > - </button><span>{quantity}</span> <button onClick={add}>+</button>
                        </div>
                        
                        <p>Total:{totalPrice}</p>
                      </div>
                  </li>
                  )

                  )}  
          </div>
      </div>
    </div>
  )
}

export default Cart
