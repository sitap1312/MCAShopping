import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import { SArrow, SContainer, Image, SImgContainer, SInfoContainer, SWrapper, SSlide, STitle, SDesc, SButton } from './SliderElements';
import { sliderItems } from "../../data";



const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {

    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
    }
  };


  return (
    <div>
      <SContainer>
        <SArrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </SArrow>

        <SWrapper slideIndex={slideIndex}>
          {sliderItems.map(item => (
            <SSlide bg={item.bg} key={item.id}>
            <SImgContainer>
              <Image src={item.img} />
            </SImgContainer>
            <SInfoContainer>
                <STitle>{ item.title }</STitle>
                <SDesc>{item.desc}</SDesc>
              <SButton>SHOP NOW</SButton>
            </SInfoContainer>
          </SSlide> 
          ))}
          
        </SWrapper>
        <SArrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </SArrow>
      </SContainer>
    </div>
  )
}

export default Slider;
