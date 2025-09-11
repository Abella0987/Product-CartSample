import React, { useState } from 'react'
import './Header.css'
import { Products } from '../data/products.js'
import ProductFilters from './ProductFilters.jsx';



const Header = () => {
  const [query, setQuery] = useState("");
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
           <span>0</span>
        </div>
      </nav>
      
      <header>
        <ProductFilters query={query} setQuery={setQuery}  />
        <div className="header-container">
          <div className="header-body">
            <ul className='list header-body-ul' >
              { Products.filter(products=>products.name.toLowerCase().includes(query)).map((products) => (
                 <li key={products.id} className="listItem">
                  <p>Name: {products.name}</p>
                  <p>Category: {products.category}</p>
                  <p>price: {products.price}</p>
                  <p>Rate: {products.rate}</p>
                  <div className="addtocart">
                    <button>Add to Cart</button>
                  </div>
                  </li>
              ))}
            </ul>
          </div>
        
        </div>
      </header>
      
    </div>
  )
}

export default Header
