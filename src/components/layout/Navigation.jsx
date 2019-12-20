import React from "react";
import styled, { css } from "styled-components";

const Title = styled.h3`
  text-transform: uppercase;
  color: #777;
  margin-bottom: 1.6rem;
`;

const Container = styled.div`
  margin-top: 8rem;
  position: relative;

  @media only screen and (max-width: 600px) {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav`
  position: fixed;
`;

const NavItem = styled.li`
  padding-left: 3rem;
  margin-bottom: 0.8rem;
  list-style: none;
  font-size: 1.2rem;

  a:link,
  a:visited {
    text-decoration: none;
    color: #212121;
  }

  ${props =>
    props.main &&
    css`
      color: #6050dc;
      font-size: 1.6rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
      padding-left: 0;
    `}
`;

const Dot = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 1rem;
  background-color: #6050dc;
  display: inline-block;
  margin-right: 0.5rem;
`;

const Navigation = () => (
  <Container>
    <Nav>
      <Title>Navigation</Title>
      <ul>
        <NavItem main>
          <i className="fa fa-id-card-o"></i> general information
        </NavItem>
        <NavItem>
          <a href="#education">
            <Dot></Dot> Education
          </a>
        </NavItem>
        <NavItem main>
          <i className="fa fa-id-card-o"></i> Remote Essessement
        </NavItem>
        {/* <NavItem>
          <Dot></Dot> Condidate Assessement
        </NavItem> */}
        <NavItem>
          <a href="#coding-challenge">
            <Dot></Dot> Coding Challenge
          </a>
        </NavItem>
        <NavItem>
          <a href="#feedback">
            <Dot></Dot> Team Feedback
          </a>
        </NavItem>
        <NavItem main>
          <i className="fa fa-id-card-o"></i> Bootcamp Assessment
        </NavItem>
        <NavItem>
          <a href="#worked-on">
            <Dot></Dot> Worked On
          </a>
        </NavItem>
        <NavItem>
          <a href="#courses">
            <Dot></Dot> Courses
          </a>
        </NavItem>
      </ul>
    </Nav>
  </Container>
);

export default Navigation;
