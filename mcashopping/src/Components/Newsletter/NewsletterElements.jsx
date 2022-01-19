import styled from "styled-components";

export const NContainer = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const NTitle = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

export const NDescription = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const NInputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
`;

export const NInput = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

export const NButton = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;