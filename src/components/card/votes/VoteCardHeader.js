import React from "react";
import styled from "styled-components";
import DislikeButton from "../../button/DislikeButton";
import LikeButton from "../../button/LikeButton";

const Container = styled.div`
  position: relative;
  padding: 40px 0 0 55px;
  margin-top: 310px;
`;

const Name = styled.div`
  display: flex;
  font-size: 50px;
`;

const Date = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const ImageVote = styled.div`
  margin: 0 10px 0 -55px;
`;

const VoteCardHeader = ({
  name,
  date,
  section,
  like,
  dislike,
  vote,
  isVoted,
}) => {
 
  const showResult = (option) => {
    switch (option) {
      case "POSITIVE":
        return (
          <ImageVote>
            <LikeButton
              image={like.image}
              height="40px"
              width="40px"
              imageSize="22px"
            />
          </ImageVote>
        );
        break;
      case "NEGATIVE":
        return (
          <ImageVote>
            <DislikeButton
              image={dislike.image}
              height="40px"
              width="40px"
              imageSize="22px"
            />
          </ImageVote>
        );
        break;

      default:
        break;
    }
  };
  return (
    <Container>
      <Name>
        {isVoted ? showResult(vote.option) : null}
        {name}
      </Name>
      <Date>
        {date} in {section}
      </Date>
    </Container>
  );
};

export default VoteCardHeader;
