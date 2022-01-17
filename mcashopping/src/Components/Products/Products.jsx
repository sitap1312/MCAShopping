import React from 'react';
import { PSContainer } from './ProductsElements';
import { popularProducts } from '../../data';
import Product from '../Product/Product';

const Products = () => {
  return (
    <PSContainer>
      {popularProducts.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </PSContainer>
  )
}

export default Products;
