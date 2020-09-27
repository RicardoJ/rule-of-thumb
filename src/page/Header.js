import React from "react";
import styled from "styled-components";
import Card from "../components/card/Card";

import NavBar from "../components/Navbar";
import data from "../data";
import CardHeader from "../components/card/CardHeader";
import CardContent from "../components/card/CardContent";
import CardFooter from "../components/card/CardFooter";

const [header] = data.characters;

const Container = styled.div`
  display: grid;
  padding: 35px 0 0 0;
  box-sizing: border-box;
  height: 100vh;
  background-image: url(${require(`../assets/${header.image}`)});
  background-size: cover;
  box-shadow: inset 0px 140px 74px -20px rgba(0, 0, 0, 0.57);
  color: white;

  /* phone or tablets */
  @media only screen and (max-width: 768px) {
    height: 43vh;
  }

  /* Tablets and desks
    ------------------------------------------------------------------------- */
  @media (max-width: 1024px) {
  }

  /* desk
    ------------------------------------------------------------------------- */
  @media (max-width: 1200px) {
  }
`;

const DeadLine = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  height: 44px;
  width: 100%;
  background-color: rgba(174, 167, 160, 0.4);

  box-sizing: border-box;
`;
const DeadLineDescription = styled.div`
  font-size: 13px;
  text-transform: uppercase;
  margin: 0px 35px 0 400px;
  width: 5%;
  &:after {
    content: " ";
    border-left: 9px solid red;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
`;
const DeadLineDays = styled.div`
  background-color: rgba(229, 228, 227, 0.7);
  font-size: 37px;
  color: #464646;
  width: 95%;
`;

const Header = () => {
  return (
    <Container>
      <NavBar />
      <Card>
        <CardHeader question="What's your opinion on" name={header.name} />
        <CardContent
          text={data.opinion.text}
          moreInformation="More information"
          wikipediaImage ={require(`../assets/icons/${data.icons.wikipedia.image}`)}
        />
        <CardFooter text="What's Your Verdict"/>
      </Card>
      <DeadLine>
        <DeadLineDescription>closing in</DeadLineDescription>
        <DeadLineDays>22 days</DeadLineDays>
      </DeadLine>
    </Container>
  );
};

export default Header;
