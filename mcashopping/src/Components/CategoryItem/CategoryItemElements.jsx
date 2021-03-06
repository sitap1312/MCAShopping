import styled from "styled-components";

export const CIContainer = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

export const CIImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CIInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CITitle = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

export const CIButton = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: #646262;
  cursor: pointer;
  font-weight: 600;
`;