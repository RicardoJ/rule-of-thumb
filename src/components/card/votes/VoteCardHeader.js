import React from "react";
import styled from "styled-components";
import DislikeButton from "../../button/DislikeButton";
import LikeButton from "../../button/LikeButton";

const Container = styled.div`
  position: relative;
  padding: 40px 0 0 55px;
  margin-top: 310px;
  @media (max-width: 768px) {
    position: relative;
    padding: 20px 0 0 50px;
    margin-top: 150px;
  }
`;

const Name = styled.div`
  display: flex;
  font-size: 52px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const Date = styled.div`
  font-size: 15px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 8px;
  }
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
  
  return (
    <Container>
      <Name>
        {isVoted && vote.option === "POSITIVE" ? (
          <ImageVote>
            <LikeButton
              image={like.image}
              height="40px"
              width="40px"
              imageSize="22px"
            />
          </ImageVote>
        ) : (
          <ImageVote>
            <DislikeButton
              image={dislike.image}
              height="40px"
              width="40px"
              imageSize="22px"
            />
          </ImageVote>
        )}
        {name}
      </Name>
      <Date>
        {date} in {section}
      </Date>
    </Container>
  );
};

export default VoteCardHeader;
