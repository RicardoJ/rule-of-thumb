import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px 0px 0px 30px;
`;
const Name = styled.div`
  font-size: 45px;
`;
const VoteCardHeader = ({ name }) => {
  return (
    <Container>
      <Name>{name}</Name>
    </Container>
  );
};

export default VoteCardHeader;
