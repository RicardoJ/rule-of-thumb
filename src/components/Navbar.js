import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import data from "../data";

const { search } = data.icons;

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Title = styled.div`
  font-size: 32px;
`;
const Menu = styled.div`
  margin-left: 200px;
`;
const MenuItem = styled(Link)`
  font-size: 16px;
  margin-right: 80px;
  text-decoration: none;
  color: white;
`;
const SearchButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
`;
const SearchIcon = styled.img``;

const NavBar = () => {
  return (
    <Router>
      <Nav>
        <Title>Rule of Thumb.</Title>
        <Menu>
          <MenuItem to="/past-trial">Past Trials</MenuItem>
          <MenuItem to="/how-it-works">How It Works</MenuItem>
          <MenuItem to="/log-in">Log in/Sign Up</MenuItem>
          <SearchButton>
            <SearchIcon src={require(`../assets/icons/${search.image}`)} />
          </SearchButton>
        </Menu>
      </Nav>
    </Router>
  );
};

export default NavBar;
