import React from "react";
import styled from "styled-components";
import NegativeBar from "./NegativeBar";
import PositiveBar from "./PositiveBar";

const percent = (total, n) =>
  Math.round((parseInt(n || 0) / parseInt(total || 0)) * 100);

const add = (positives, negatives) =>
  parseInt(positives || 0) + parseInt(negatives || 0);

const Vote = styled.div`
  display: flex;
  align-self: flex-end;
  width: 100%;
  height: 49px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5em;
  background-color: transparent;
  border-radius: 3px;
  font-size: 24px;
`;

const VotesBar = ({
  vote = { status: "UNKNOWN" },
  isVoted,
  imageLike,
  imageDislike,
}) => {
  
  const totalVotes = add(vote.positives, vote.negatives);
  const percentagePositives = percent(totalVotes, vote.positives);
  const percentageNegatives = percent(totalVotes, vote.negatives);

  return (
    <>
      {isVoted ? (
        <Vote>
          <PositiveBar
            vote={vote}
            percentagePositives={percentagePositives}
            imageLike={imageLike}
          />
          <NegativeBar
            vote={vote}
            percentageNegatives={percentageNegatives}
            imageDislike={imageDislike}
          />
        </Vote>
      ) : null}
    </>
  );
};

export default VotesBar;
