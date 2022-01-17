import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { PCircle, PContainer, PIcon, PImage, PInfo } from './ProductElements';

const Product = ({item}) => {
  return (
    <PContainer>
      <PCircle />
      <PImage src={item.img} />
      <PInfo>
        <PIcon>
          <ShoppingCartOutlined />
        </PIcon>

        <PIcon>
          <SearchOutlined />
        </PIcon>

        <PIcon>
          <FavoriteBorderOutlined />
        </PIcon>
      </PInfo>
    </PContainer>
  )
}

export default Product;
