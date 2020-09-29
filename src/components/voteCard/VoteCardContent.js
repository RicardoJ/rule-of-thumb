import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 55px;
  width: 65%;
`;

const Text = styled.p`
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const VoteCardContent = ({text}) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

export default VoteCardContent;
