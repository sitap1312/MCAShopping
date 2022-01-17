import styled from "styled-components";

export const PInfo = styled.div`
opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5 ease;
  cursor: pointer;
`;


export const PContainer = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fbfcfc;
  position: relative;

  &:hover ${PInfo}{
    opacity: 1;
  }
`;

export const PCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

export const PImage = styled.img`
  height: 75%;
  z-index: 2;
`;

export const PIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #c9e6e6;
    transform: scale(1.1);
  }
`;