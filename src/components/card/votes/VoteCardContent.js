import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 55px;
  width: 65%;
`;

const Text = styled.p`
  font-size: 16px;
`;

const VoteCardContent = ({text}) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

export default VoteCardContent;
