import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px 0px 0px 30px;
  margin-top: 310px;
`;
const Name = styled.div`
  font-size: 56px;
`;
const Date = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
const VoteCardHeader = ({ name, date, section }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Date>{date} in {section}</Date> 
    </Container>
  );
};

export default VoteCardHeader;
