import styled from "styled-components";

export const SContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const SArrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

export const SWrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const SSlide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`;

export const SImgContainer = styled.div`
height: 100%;
  flex: 1;
`;

export const Image = styled.img`
  /* height: 80%; */
  height: 100%;
  width: 90%;
  /* width: 100%; */
`;

export const SInfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const STitle = styled.h1`
  font-size: 70px;
`;

export const SDesc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const SButton = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;