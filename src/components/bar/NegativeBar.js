import React from "react";
import styled from "styled-components";

const NegativePercent = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => props.percentageNegatives}%;
  height: 100%;
  background-color: var(--theme-color-accent);
  background-color: rgba(251, 177, 47, 0.5);
  opacity: 1;
  color: white;
  padding: 0 24px;
`;
const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;
const NegativeBar = ({ vote, percentageNegatives, imageDislike }) => {
  return (
    <NegativePercent vote={vote} percentageNegatives={percentageNegatives}>
      <Image
        alt="dislike"
        src={require(`../../assets/icons/${imageDislike}`)}
      />
      {percentageNegatives}%
    </NegativePercent>
  );
};

export default NegativeBar;
