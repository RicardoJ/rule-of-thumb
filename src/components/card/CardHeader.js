import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px 0px 0px 30px;
`;
const QuestionOpinion = styled.div`
  font-size: 16px;
`;

const CharacterName = styled.div`
  font-size: 60px;
`;

const CardHeader = ({question,name}) => {
  return (
    <Container>
      <QuestionOpinion>{question}</QuestionOpinion>
      <CharacterName>{name}?</CharacterName>
    </Container>
  );
};

export default CardHeader;
