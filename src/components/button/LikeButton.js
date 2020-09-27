import React from "react";
import styled from "styled-components";

const LikeBtn = styled.button`
  background-color: rgba(45, 187, 179, 0.5);
  border: none;
  cursor: pointer;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
const LikeImage = styled.img`
  width: ${(props) => props.imageSize || "36px"};
`;
const LikeButton = ({ image, height, width, imageSize }) => {
  return (
    <LikeBtn height={height} width={width}>
      <LikeImage
        imageSize={imageSize}
        alt="like"
        src={require(`../../assets/icons/${image}`)}
      />
    </LikeBtn>
  );
};

export default LikeButton;
