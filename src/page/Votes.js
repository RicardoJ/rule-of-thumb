import React from "react";
import styled from "styled-components";
import DislikeButton from "../components/button/DislikeButton";
import LikeButton from "../components/button/LikeButton";
import VoteButton from "../components/button/VoteButton";
import VoteCard from "../components/card/votes/VoteCard";
import VoteCardContent from "../components/card/votes/VoteCardContent";
import VoteCardHeader from "../components/card/votes/VoteCardHeader";
import data from "../data";

const { like, dislike } = data.icons;
const Container = styled.div`
  margin: 0 200px 0 200px;
  color: #ffff;
`;
const Title = styled.div`
  font-size: 40px;
  color: #333333;
  margin: 0 0 40px 150px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const VoteSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  padding: 0 0 0 30px;
`;

const Votes = () => {
  return (
    <Container>
      <Title>Votes</Title>
      <Cards>
        {data.characters.map((character) => (
          <VoteCard key={character.id} backgroundImage={character.image}>
            <VoteCardHeader
              name={character.name}
              date={character.date}
              section={character.section}
            />
            <VoteCardContent text={character.description} />
            <VoteSection>
            
              <LikeButton
                image={like.image}
                height="40px"
                width="40px"
                imageSize="22px"
              />
              <DislikeButton
                image={dislike.image}
                height="40px"
                width="40px"
                imageSize="22px"
              />
              <VoteButton />
            </VoteSection>
          </VoteCard>
        ))}
      </Cards>
    </Container>
  );
};

export default Votes;
