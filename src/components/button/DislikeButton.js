import React from "react";
import styled from "styled-components";

const DislikeBtn = styled.button`
  background-color: rgba(251, 177, 47, 0.5);
  border: none;
  cursor: pointer;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const DislikeImage = styled.img`
  width: ${(props) => props.imageSize || "36px"};
`;
const DislikeButton = ({ image, height, width, imageSize }) => {
  return (
    <DislikeBtn height={height} width={width}>
      <DislikeImage
        imageSize={imageSize}
        alt="dislike"
        src={require(`../../assets/icons/${image}`)}
      />
    </DislikeBtn>
  );
};

export default DislikeButton;
