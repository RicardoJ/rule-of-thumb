import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  width: 600px;
  height: 650px;
  margin: 0 0 40px 40px;
`;
const VoteCard = ({ children }) => {
  return <Container>{children}</Container>;
};

export default VoteCard;
