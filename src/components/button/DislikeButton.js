import React from "react";
import styled from "styled-components";

const DislikeBtn = styled.button`
  background-color: rgba(251, 177, 47, 0.5);
  border: none;
  cursor: pointer;
  height: 121px;
  width: 50%;
`;
const DislikeButton = ({ image }) => {
  return (
    <DislikeBtn>
      <img alt="dislike" src={require(`../../assets/icons/${image}`)} />
    </DislikeBtn>
  );
};

export default DislikeButton;
