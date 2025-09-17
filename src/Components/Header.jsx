import React, { useState } from 'react'
import './Header.css'
import { Products } from '../data/products.js'
import ProductFilters from './ProductFilters.jsx';
import Cart from './Cart.jsx'



const Header = () => {
  const [query, setQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  function handleClick(e){
    e.preventDefault();
    setCartCount(prevCount => prevCount + 1);
}


  return (
    <div className="container">
      <nav>
          <div className="nav-right">
              <h3 className="title">Store of Everything</h3>
          </div>
          <div className="search">
              <input type="text" placeholder='Search' onChange={e=> setQuery(e.target.value)}/>
              <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="nav-left">
            <i class="fa-solid fa-cart-shopping"></i>
              <span>{cartCount}</span>
          </div>
      </nav>
      
      <header>
        <ProductFilters query={query} setQuery={setQuery}  />
        <div className="header-container">
          <div className="header-body">
            <ul className='list header-body-ul' >
              { Products.filter(products=>products.category.toLowerCase().includes(query)).map((products) => (
                 <li key={products.id} className="listItem">
                  <p>Name: {products.name}</p>
                  <p>Category: {products.category}</p>
                  <p>price: {products.price}</p>
                  <p>Rate: {products.rate}</p>
                  <div className="addtocart">
                    <button onClick={handleClick}>Add to Cart</button>
                  </div>
                  </li>
              ))}
            </ul>
          </div>
           <Cart />
        </div>
      </header>
      
    </div>
  )
}

export default Header
