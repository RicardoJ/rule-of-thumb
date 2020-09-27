import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 0px 0px 35px;
  width: 65%;
`;

const Text = styled.p`
  font-size: 21px;
`;
const MoreInformation = styled.a`
  font-size: 14px;
  color: #ffffff;
`;
const Image = styled.img`
  margin-right: 5px;
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
