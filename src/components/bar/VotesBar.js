import React from "react";
import styled from "styled-components";

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

const PositivePercent = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) =>
    percent(
      add(props.vote.positves, props.vote.negatives),
      props.vote.positives
    )}%;
  height: 100%;
  background-color: var(--theme-color-accent);
  background-color: rgba(45, 187, 179, 0.5);
  opacity: 1;
  color: white;
  padding: 0 24px;
`;

const NegativePercent = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) =>
    percent(
      add(props.vote.positves, props.vote.negatives),
      props.vote.negatives
    )}%;
  height: 100%;
  background-color: var(--theme-color-accent);
  background-color: rgba(251, 177, 47, 0.5);
  opacity: 1;
  color: white;
  padding: 0 24px;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

const VotesBar = ({
  vote = { status: "UNKNOWN" },
  isVoted,
  imageLike,
  imageDislike,
  bgColor,
}) => {
  const totalVotes = add(vote.positives, vote.negatives);
  const percentagePositives = percent(totalVotes, vote.positives);
  const percentageNegatives = percent(totalVotes, vote.negatives);

  return (
    <>
      {isVoted ? (
        <Vote className="skill-bar" bgColor={bgColor}>
          <PositivePercent vote={vote} bgColor={bgColor}>
            <Image
              alt="like"
              src={require(`../../assets/icons/${imageLike}`)}
            />
            {percentagePositives}%
          </PositivePercent>
          <NegativePercent vote={vote} bgColor={bgColor}>
            <Image
              alt="like"
              src={require(`../../assets/icons/${imageDislike}`)}
            />
            {percentageNegatives}%
          </NegativePercent>
        </Vote>
      ) : null}
    </>
  );
};

export default VotesBar;
