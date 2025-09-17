import React from 'react';
import './Header.css';
import { Products } from '../data/products.js';

const ProductFilters = ({ query, setQuery }) => {
  const uniqueCategories = [...new Set(Products.map(p => p.category))];

  return (
    <div className="filters">
      <select name="category" className="category" value={query}
            onChange={e => setQuery(e.target.value.toLowerCase())}
      >
        <option value="">All Categories</option>
        {
        uniqueCategories.map((cat, idx) => (
          <option key={idx} value={cat.toLowerCase()}>
            {cat}
          </option>
        ))}
      </select>

    </div>
  );
};

export default ProductFilters;
