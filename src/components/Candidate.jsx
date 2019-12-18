import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import avatar from "../avatar.jpg";

const Container = styled.div`
  display: flex;
  justify-content: left;
  width: 50rem;
  margin-bottom: 4rem;
`;

const Image = styled.div`
  border-radius: 0.4rem;
  overflow: hidden;
  margin-right: 3rem;

  img {
    height: 25rem;
    width: 25rem;
  }
`;

const ParamList = styled.ul`
  margin-top: 4rem;

  li {
    margin-bottom: 3rem;
    list-style: none;
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

const Candidate = ({ id }) => {
  return (
    <Container>
      <Image>
        <Link to={`/profile/${id}`}>
          <img src={avatar} />
        </Link>
      </Image>
      <ParamList>
        <li>Copy link</li>
        <li>edit</li>
        <li>duplicate</li>
        <li>delete</li>
      </ParamList>
    </Container>
  );
};

export default Candidate;
