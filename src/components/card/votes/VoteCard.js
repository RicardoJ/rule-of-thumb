import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  box-shadow: inset 2px -300px 74px -30px rgba(0, 0, 0, 0.57);
  width: 600px;
  height: 650px;
  margin: 0 0 40px 40px;
`;
const VoteCard = ({ children, backgroundImage }) => {
  return (
    <Container backgroundImage={require(`../../../assets/${backgroundImage}`)}>
      {children}
    </Container>
  );
};

export default VoteCard;
