import React from "react";
import styled from "styled-components";
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

const VoteCardHeader = ({ name, date, section, like, id }) => {
  return (
    <Container>
      <Name>
        {id === 2 ? (
          <ImageVote>
            <LikeButton
              image={like.image}
              height="40px"
              width="40px"
              imageSize="22px"
            />
          </ImageVote>
        ) : null}
        {name}
      </Name>
      <Date>
        {date} in {section}
      </Date>
    </Container>
  );
};

export default VoteCardHeader;
