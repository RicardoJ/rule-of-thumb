import React from "react";
import styled from "styled-components";

const VoteBtn = styled.button`
  background-color: transparent;
  border: 1px solid #e7e7e7;
  cursor: pointer;
  height: 40px;
  width: 100px;
  color: white;
  font-size: 14px;
 
`;
const VoteButton = () => {
  return <VoteBtn>Vote Now</VoteBtn>;
};

export default VoteButton;
