import React from "react";
import styled from "styled-components";
import VoteNowButton from "../components/button/VoteNowButton";
import VoteCard from "../components/card/votes/VoteCard";
import VoteCardContent from "../components/card/votes/VoteCardContent";
import VoteCardHeader from "../components/card/votes/VoteCardHeader";
import data from "../data";

const Container = styled.div`
  margin: 0px 200px 0px 200px;
  color: #ffff;
`;
const Title = styled.div`
  font-size: 40px;
  color: #333333;
  margin: 0px 0px 40px 150px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Votes = () => {
  return (
    <Container>
      <Title>Votes</Title>
      <Cards>
        {data.characters.map((character) => (
          <VoteCard key={character.id} backgroundImage={character.image}>
            <VoteCardHeader name={character.name} />
            <VoteCardContent text={character.description} />
            <VoteNowButton/>
          </VoteCard>
        ))}
      </Cards>
    </Container>
  );
};

export default Votes;
