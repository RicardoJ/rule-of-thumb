import React from "react";
import styled from "styled-components";

const PositivePercent = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => props.percentagePositives}%;
  height: 100%;
  background-color: var(--theme-color-accent);
  background-color: rgba(45, 187, 179, 0.5);
  opacity: 1;
  color: white;
  padding: 0 24px;
`;
const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;
const PositiveBar = ({ vote, percentagePositives, imageLike }) => {
  
    return (
    <PositivePercent vote={vote} percentagePositives={percentagePositives}>
      <Image alt="like" src={require(`../../assets/icons/${imageLike}`)} />
      {percentagePositives}%
    </PositivePercent>
  );
};

export default PositiveBar;
