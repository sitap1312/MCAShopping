import React from 'react';
import { categories } from '../../data';
import CategoryItem from '../CategoryItem/CategoryItem';
import { CContainer } from './CategoriesElements';

const Categories = () => {
  return (
    <CContainer>
      {categories.map(item => (
        <CategoryItem item={item}/>
      ))}
    </CContainer>
  )
}

export default Categories;
