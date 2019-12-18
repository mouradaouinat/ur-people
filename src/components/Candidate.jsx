import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: left;
  width: 50rem;
  margin-bottom: 4rem;

  @media only screen and (max-width: 600px) {
    width: 40rem;
  }
`;

const Image = styled.div`
  border-radius: 0.4rem;
  overflow: hidden;
  margin-right: 3rem;

  img {
    height: 25rem;
    width: 25rem;

    @media only screen and (max-width: 600px) {
      height: 20rem;
      width: 20rem;
    }
  }
`;

const ParamList = styled.ul`
  margin-top: 4rem;

  li {
    margin-bottom: 3rem;
    list-style: none;
    font-size: 1.6rem;
    font-weight: 500;
    text-align: left;

    @media only screen and (max-width: 600px) {
      margin-bottom: 2rem;
    }
  }
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;

  ${props =>
    props.red &&
    css`
      color: red;
    `}
`;

const Candidate = ({ id, avatar, onDelete }) => {
  return (
    <Container>
      <Image>
        <Link to={`/profile/${id}`}>
          <img src={avatar} alt={avatar} />
        </Link>
      </Image>
      <ParamList>
        <li>
          <Button>
            <i className="fa fa-link"></i> Copy link
          </Button>
        </li>
        <li>
          <Button>
            <i className="fa fa-pencil-square-o"></i> Edit
          </Button>
        </li>
        <li>
          <Button>
            <i className="fa fa-clone"></i> Duplicate
          </Button>
        </li>
        <li>
          <Button red onClick={() => onDelete(id)}>
            <i className="fa fa-trash-o"></i> Delete
          </Button>
        </li>
      </ParamList>
    </Container>
  );
};

export default Candidate;
