import React from "react";
import styled from "styled-components";
import { Link, Switch, Route } from "react-router-dom";
import data from "../data";
import PastTrial from "../page/PastTrial";
import HowItWorks from "../page/HowItWorks";
import LogIn from "../page/LogIn";

const { search } = data.icons;

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
`;
const Title = styled.div`
  font-size: 32px;
  @media (max-width: 768px) {
    margin-left: 20px;
    font-size: 14px;
    width: 97px;
  }
`;
const Menu = styled.div`
  margin-left: 200px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    margin-left: 20px;
    margin-right: 20px;
  }
`;
const MenuItem = styled(Link)`
  font-size: 16px;
  margin-right: 80px;
  text-decoration: none;
  color: white;
  @media (max-width: 768px) {
    font-size: 8px;
    margin-right: 20px;
  }
`;
const SearchButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  @media (max-width: 768px) {
    margin-top: -19px;
    height: 50px;
  }
`;
const SearchIcon = styled.img` height: 12px;`;

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
