import React from "react";
import styled from "styled-components";

const LikeBtn = styled.button`
  background-color: rgba(45, 187, 179, 0.5);
  border: none;
  cursor: pointer;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  @media (max-width: 768px) {
    height: 25px;
    width: 80%;
  }
`;
const LikeImage = styled.img`
  width: ${(props) => props.imageSize || "36px"};
  @media (max-width: 768px) {
    height: 16px;
    
  }
`;
const LikeButton = ({ image, height, width, imageSize, ...otherProps }) => {
  return (
    <LikeBtn height={height} width={width} {...otherProps}>
      <LikeImage
        imageSize={imageSize}
        alt="like"
        src={require(`../../assets/icons/${image}`)}
      />
    </LikeBtn>
  );
};

export default LikeButton;
