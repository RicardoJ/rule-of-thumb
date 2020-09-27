import React, { useState } from "react";
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
const VoteButton = ({doVote}) => {
  const [vote, setVote] = useState(false);

  const toVote = () => {
    doVote()
    setVote(!vote);
  };
  return (
    <VoteBtn onClick={toVote}> {vote ? "Vote again" : "Vote now"}</VoteBtn>
  );
};

export default VoteButton;
