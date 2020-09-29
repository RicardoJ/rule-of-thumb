import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 35px;
  width: 65%;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    padding-left: 15px;
    margin-bottom: 0;
  }
`;

const Text = styled.p`
  font-size: 21px;
  @media (max-width: 768px) {
    font-size: 10px;
    width: 158px;
    text-align: justify;
  }
`;
const MoreInformation = styled.a`
  font-size: 14px;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 8px;
  }
  
`;
const Image = styled.img`
  margin-right: 5px;
  @media (max-width: 768px) {
    margin-right: 3px;
    height: 8px;
  }
`;

const CardContent = ({ text, moreInformation, wikipediaImage }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <MoreInformation href="#">
        <Image alt="wikipedia" src={wikipediaImage} />
        {moreInformation}
      </MoreInformation>
    </Container>
  );
};

export default CardContent;
