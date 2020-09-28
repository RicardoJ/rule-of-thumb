import React, { useState } from "react";
import styled from "styled-components";
import VoteCard from "../components/card/votes/VoteCard";
import data from "../data";
import { saveVote, getVoteState } from "../services";

const increment = (n) => (n || 0) + 1;

const incrementNegavites = ({ negatives, ...status } = {}) =>
  Object.assign(status, { negatives: increment(negatives) });

const incrementPositives = ({ positives, ...status } = {}) =>
  Object.assign(status, { positives: increment(positives) });

const Container = styled.div`
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

  & > * {
    margin-right: 40px;
    margin-bottom: 40px;
  }
`;

const Votes = () => {
  const [state, setState] = useState(getVoteState() || {});

  const saveCharacterVote = (id, vote) => {
    let votation = state[id] || {};
    if (vote === "NEGATIVE") votation = incrementNegavites(votation);
    else votation = incrementPositives(votation);
    const newState = { ...state, [id]: { ...votation, status: "VOTED" } };
    setState(newState);
    saveVote(newState);
  };

  const prepareToVoteAgain = (id) => {
    const votation = { ...state[id], status: "READY_TO_VOTE_AGAIN" };
    const newState = { ...state, [id]: votation };
    setState(newState);
    saveVote(newState);
  };

  return (
    <Container>
      <Title>Votes</Title>
      <Cards>
        {data.characters.map((character) => {
          const { id } = character;
          return (
            <VoteCard
              key={id}
              vote={state[id]}
              character={character}
              backgroundImage={character.image}
              onVote={saveCharacterVote}
              onVoteAgain={prepareToVoteAgain}
            />
          );
        })}
      </Cards>
    </Container>
  );
};

export default Votes;
