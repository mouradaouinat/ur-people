import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import urPeople from "../../ur-people.svg";
import dots from "../../dots.svg";

const Container = styled.div`
  width: 100%;
  height: 6.5rem;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 10px rgba(235, 235, 235, 0.5);
  padding: 2rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  float: right;
`;

const NavBar = () => {
  return (
    <Container>
      <nav>
        <Link to="/">
          <img src={urPeople} alt="ur people" style={{ marginTop: ".6rem" }} />
        </Link>
        <Button>
          <img src={dots} alt="ur people" />
        </Button>
      </nav>
    </Container>
  );
};

export default NavBar;
