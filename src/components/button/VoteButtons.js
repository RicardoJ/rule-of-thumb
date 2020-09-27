import React from "react";
import styled from "styled-components";

import data from "../../data";

const { like, dislike } = data.icons;

const Buttons = styled.div`
  display: flex;
`;

const LikeButton = styled.button`
  background-color: rgba(45, 187, 179, 0.5);
  border: none;
  cursor: pointer;
  height: 121px;
  width: 50%;
`;

const DislikeButton = styled.button`
  background-color: rgba(251, 177, 47, 0.5);
  border: none;
  cursor: pointer;
  height: 121px;
  width: 50%;
`;
const VoteButtons = () => {
  return (
    <Buttons>
      <LikeButton>
        <img alt="like" src={require(`../../assets/icons/${like.image}`)} />
      </LikeButton>
      <DislikeButton>
        <img
          alt="dislike"
          src={require(`../../assets/icons/${dislike.image}`)}
        />
      </DislikeButton>
    </Buttons>
  );
};

export default VoteButtons;
