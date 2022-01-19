import styled from "styled-components";

export const FContainer = styled.div`
  display: flex;
`;

export const FLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const FLogo = styled.h1`
  
`;

export const FDesc = styled.p`
  margin: 20px 0px;
`;

export const FSocialContainer = styled.div`
  display: flex;
`;

export const FSocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const FCenter = styled.div`
  flex: 1;
  padding: 20px;
`;

export const FTitle = styled.h3`
  margin-bottom: 30px;
`;

export const FList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const FListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const FRight = styled.div`
  flex: 1;
  padding: 20px;
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Payment = styled.img`
  width: 50%;
`;