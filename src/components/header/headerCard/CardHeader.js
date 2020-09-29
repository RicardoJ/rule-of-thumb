import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px 0 0 30px;
  @media (max-width: 768px) {
    padding: 15px 0 0 15px;
  }
`;
const QuestionOpinion = styled.div`
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CharacterName = styled.div`
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CardHeader = ({ question, name }) => {
  return (
    <Container>
      <QuestionOpinion>{question}</QuestionOpinion>
      <CharacterName>{name}?</CharacterName>
    </Container>
  );
};

export default CardHeader;
