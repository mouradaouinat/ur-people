import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import urPeople from "../../ur-people.svg";
import Condidate from "../Candidate";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 3rem;

  @media only screen and (max-width: 600px) {
    max-width: 590px;
    text-align: center;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Logo = styled.div`
  margin-top: 1.2rem;

  @media only screen and (max-width: 600px) {
    margin: auto;
    margin-bottom: 1rem;
  }
`;

const Search = styled.div`
  input {
    all: unset;
    width: 30rem;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 600px) {
    margin: auto;
  }
`;

const Condidates = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
`;

const Banner = styled.div`
  background-color: #fff;
  border-radius: 0.8rem;
  padding: 2rem 1rem;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  margin-top: 5rem;
  margin-bottom: 4rem;

  h1 {
    font-weight: 700;
  }
`;

const People = () => {
  const [condidates, setcondidates] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <Container>
      <Nav>
        <Logo>
          <Link to="/">
            <img src={urPeople} alt="UR People" />
          </Link>
        </Logo>
        <Search>
          <input type="text" placeholder="Search candidate" />
        </Search>
      </Nav>
      <Banner>
        <h1>All Condidates</h1>
      </Banner>
      <Condidates>
        {condidates.map(condidate => (
          <Condidate key={condidate} id={condidate}></Condidate>
        ))}
      </Condidates>
    </Container>
  );
};

export default People;
