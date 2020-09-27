import React from "react";
import styled from "styled-components";

const VoteNowBtn = styled.button`
  background-color: transparent;
  border: 1px solid #e7e7e7;
  cursor: pointer;
  height: 40px;
  width: 80px;
  color: white;
  font-size: 14px;
`;
const VoteNowButton = () => {
  return <VoteNowBtn>Vote Now</VoteNowBtn>;
};

export default VoteNowButton;
