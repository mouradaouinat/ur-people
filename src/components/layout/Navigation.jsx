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

const Navigation = () => (
  <Container>
    <Nav>
      <Title>Navigation</Title>
      <ul>
        <NavItem main>
          <i className="fa fa-id-card-o"></i> general information
        </NavItem>
        <NavItem>
          <a href="#education">Education</a>
        </NavItem>
        <NavItem main>
          <i className="fa fa-id-card-o"></i> Remote Essessement
        </NavItem>
        <NavItem>Condidate Assessement</NavItem>
        <NavItem>Team Evaluation / Review</NavItem>
        <NavItem>
          <a href="#coding-challenge">Coding Challenge</a>
        </NavItem>
        <NavItem>
          <a href="#feedback">Team Feedback</a>
        </NavItem>
        <NavItem main>
          <i className="fa fa-id-card-o"></i> Bootcamp Assessment
        </NavItem>
        <NavItem>
          <a href="#worked-on">Worked On</a>
        </NavItem>
        <NavItem>
          <a href="#courses">Courses</a>
        </NavItem>
      </ul>
    </Nav>
  </Container>
);

export default Navigation;
