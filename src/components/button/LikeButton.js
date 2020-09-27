import React from "react";
import styled from "styled-components";

const LikeBtn = styled.button`
  background-color: rgba(45, 187, 179, 0.5);
  border: none;
  cursor: pointer;
  height: 121px;
  width: 50%;
`;
const LikeButton = ({ image }) => {
  return (
    <LikeBtn>
      <img alt="like" src={require(`../../assets/icons/${image}`)} />
    </LikeBtn>
  );
};

export default LikeButton;
