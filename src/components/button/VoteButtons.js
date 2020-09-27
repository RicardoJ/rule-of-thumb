import React from "react";
import styled from "styled-components";
import LikeButton from "../button/LikeButton";
import DislikeButton from "../button/DislikeButton";
import data from "../../data";

const { like, dislike } = data.icons;

const Buttons = styled.div`
  display: flex;
`;

const VoteButtons = () => {
  return (
    <Buttons>
      <LikeButton image={like.image} />
      <DislikeButton image={dislike.image} />
    </Buttons>
  );
};

export default VoteButtons;
