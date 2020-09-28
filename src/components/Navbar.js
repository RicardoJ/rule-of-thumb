import React from "react";
import styled from "styled-components";
import {  Link, Switch, Route } from "react-router-dom";
import data from "../data";
import PastTrial from "../page/PastTrial";
import HowItWorks from "../page/HowItWorks";
import LogIn from "../page/LogIn";


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
    <>
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
      <Switch>
        <Route path="/past-trial" component={PastTrial}></Route>
        <Route path="/how-it-works" component={HowItWorks}></Route>
        <Route path="/log-in" component={LogIn}></Route>
      </Switch>
    </>
  );
};

export default NavBar;
