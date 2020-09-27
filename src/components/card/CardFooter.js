import React from "react";
import styled from "styled-components";
import VoteButtons from "../button/VoteButtons";

const Container = styled.div`
 
`;
const Text = styled.p`
 padding: 0px 0px 0px 35px;
  width: 65%;
  font-size: 21px;
`;

const CardFooter = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <VoteButtons/>
    </Container>
  );
};

export default CardFooter;
