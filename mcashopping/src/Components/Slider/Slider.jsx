import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react'
import { SArrow, SContainer } from './SliderElements';

const Slider = () => {
  return (
    <div>
      <SContainer>
        <SArrow>
          <ArrowLeftOutlined />
        </SArrow>

        <SArrow>
          <ArrowRightOutlined />
        </SArrow>
      </SContainer>
    </div>
  )
}

export default Slider;
