import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 0px 0px 35px;
  width: 65%;
  margin-bottom: 40px;
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
