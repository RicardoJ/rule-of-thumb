import React from "react";
import styled from "styled-components";

const DislikeBtn = styled.button`
  background-color: rgba(251, 177, 47, 0.5);
  border: none;
  cursor: pointer;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  @media (max-width: 768px) {
    height: 25px;
    width: 80%;
  }
`;

const DislikeImage = styled.img`
  width: ${(props) => props.imageSize || "36px"};
  @media (max-width: 768px) {
    height: 16px;
  }
`;

const DislikeButton = ({ image, height, width, imageSize, ...otherProps }) => {
  return (
    <DislikeBtn height={height} width={width} {...otherProps}>
      <DislikeImage
        imageSize={imageSize}
        alt="dislike"
        src={require(`../../assets/icons/${image}`)}
      />
    </DislikeBtn>
  );
};

export default DislikeButton;
