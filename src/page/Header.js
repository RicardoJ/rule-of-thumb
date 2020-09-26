import React from "react";
import styled from "styled-components";

import NavBar from "../components/Navbar";
import img from '../assets/imgHeader.svg'
import data from "../data";

const {image} = data.characters[0]

const Container = styled.div`
  padding: 20px 0;
  background-image: url(${img});
  background-size: cover;

  color: white;
  /* phone or tablets */
  @media (min-width: 768px) {
    width: 100%;
    height: 50vh;
  }

  /* Tablets and desks
    ------------------------------------------------------------------------- */
  @media (min-width: 1024px) {
    width: 100%;
  }

  /* desk
    ------------------------------------------------------------------------- */
  @media (min-width: 1200px) {
    width: 100%;
    height: 80vh;
    -webkit-mask-image: linear-gradient(to bottom, rgba(61, 61, 61, 0) 10%,rgba(0,0,0,1) 100%);
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
