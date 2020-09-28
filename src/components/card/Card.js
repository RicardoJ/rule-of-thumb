import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(35, 34, 33, 0.43);
  backdrop-filter: blur(35px);
  width: 600px;
  height: 500px;
  margin-left: 200px;
`;

const Card = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
