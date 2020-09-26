import React from "react";
import styled from "styled-components";

import NavBar from "../components/Navbar";
import data from "../data";

const [header] = data.characters;
// h = w x 0.66 => w = h / 0.66
const Container = styled.div`
  padding: 20px 0;
  box-sizing: border-box;
  height: 100vh;
  background-image: url(${require(`../assets/${header.image}`)});
  background-size: cover;
  box-shadow: inset 0px 140px 74px -20px rgba(0, 0, 0, 0.57);
  color: white;

  /* phone or tablets */
  @media (min-width: 768px) {
  }

  /* Tablets and desks
    ------------------------------------------------------------------------- */
  @media (min-width: 1024px) {
  }

  /* desk
    ------------------------------------------------------------------------- */
  @media (min-width: 1200px) {
  }
`;

const Header = () => {
  return (
    <Container>
      <NavBar />
    </Container>
  );
};

export default Header;
