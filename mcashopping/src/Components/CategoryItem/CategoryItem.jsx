import React from 'react'
import { CIButton, CIContainer, CIImage, CIInfo, CITitle } from './CategoryItemElements';

const CategoryItem = ({item}) => {
  return (
    <CIContainer>
      <CIImage src={item.img}/>
      <CIInfo>
        <CITitle>
          {item.title}
        </CITitle>
        <CIButton>SHOP NOW</CIButton>
      </CIInfo>
    </CIContainer>
  )
}

export default CategoryItem;
