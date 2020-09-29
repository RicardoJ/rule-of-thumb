import React from "react";
import styled from "styled-components";
import VoteButtons from "../button/VoteButtons";


const Text = styled.p`
 padding-left: 35px;
  width: 65%;
  font-size: 21px;
  @media (max-width: 768px) {
    font-size: 10px;
    padding-left:  15px;
    margin: 2px 1px 6px 0;
  }
`;

const CardFooter = ({ text }) => {
  return (
    <>
      <Text>{text}</Text>
      <VoteButtons/>
    </>
  );
};

export default CardFooter;
