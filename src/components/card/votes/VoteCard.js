import React from "react";
import styled from "styled-components";
import VoteCardContent from "./VoteCardContent";
import VoteCardHeader from "./VoteCardHeader";
import DislikeButton from "../../button/DislikeButton";
import LikeButton from "../../button/LikeButton";
import VoteButton from "../../button/VoteButton";
import data from "../../../data";

const { like, dislike } = data.icons;

const STATUS = {
  UNKNOWN: "UNKNOWN",
  VOTED: "VOTED",
  AGAIN: "READY_TO_VOTE_AGAIN",
};

const Container = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  box-shadow: inset 2px -300px 74px -30px rgba(0, 0, 0, 0.57);
  overflow: hidden;
  width: 600px;
  height: 650px;
`;

const VoteSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  padding-left: 55px;
`;

const VoteCard = ({
  character,
  vote = { status: STATUS.UNKNOWN },
  onVote,
  onVoteAgain,
  backgroundImage,
}) => {
  const [stagedVote, setStagedVote] = React.useState(vote);
  const isVoted = vote.status === STATUS.VOTED;

  const handleVote = () => {
    if (isVoted) onVoteAgain(character.id);
    else onVote(character.id, stagedVote);
  };

  return (
    <Container backgroundImage={require(`../../../assets/${backgroundImage}`)}>
      <VoteCardHeader
        name={character.name}
        date={character.date}
        section={character.section}
        id={character.id}
        like={like}
      />
      <VoteCardContent
        text={isVoted ? "Thank you for voting!" : character.description}
      />
      <VoteSection>
        {!isVoted ? (
          <>
            <LikeButton
              image={like.image}
              height="40px"
              width="40px"
              imageSize="22px"
              onClick={() => setStagedVote("POSITIVE")}
            />
            <DislikeButton
              image={dislike.image}
              height="40px"
              width="40px"
              imageSize="22px"
              onClick={() => setStagedVote("NEGATIVE")}
            />
          </>
        ) : null}
        <VoteButton onClick={handleVote}>
          {isVoted ? "Vote again" : "Vote now"}
        </VoteButton>
      </VoteSection>
    </Container>
  );
};

export default VoteCard;
