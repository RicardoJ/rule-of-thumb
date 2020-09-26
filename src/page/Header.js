import React from "react";
import styled from "styled-components";

import NavBar from "../components/Navbar";
import data from "../data";

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
  background-color: rgba(174,167,160,0.4);

  box-sizing: border-box;
`;
const DeadLineDescription = styled.div`
  font-size: 13px;
  text-transform: uppercase;
  margin: 0px 35px 0 400px;
  width: 5%;
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
      <DeadLine>
        <DeadLineDescription>closing in</DeadLineDescription>
        <DeadLineDays>22 days</DeadLineDays>
      </DeadLine>
    </Container>
  );
};

export default Header;
