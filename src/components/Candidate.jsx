import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: left;
  width: 50rem;
  margin-bottom: 4rem;
  border-radius: 0.8rem;

  @media only screen and (max-width: 768px) {
    width: 40rem;
    background-color: #fff;
    padding: 1.5rem;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
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

const Candidate = ({ id, avatar, onDelete, onDuplicate }) => {
  return (
    <Container>
      <Image>
        <img src={avatar} alt={avatar} />
      </Image>
      <ParamList>
        <li>
          <Button>
            <i className="fa fa-link"></i> Copy link
          </Button>
        </li>
        <li>
          <Link className="view-link" to={`/profile/${id}`}>
            <i className="fa fa-eye"></i> View
          </Link>
        </li>
        <li>
          <Button onClick={() => onDuplicate(id)}>
            <i className="fa fa-clone"></i> Duplicate
          </Button>
        </li>
        <li>
          <Button style={{ color: "#ff1a1a" }} onClick={() => onDelete(id)}>
            <i className="fa fa-trash-o"></i> Delete
          </Button>
        </li>
      </ParamList>
    </Container>
  );
};

export default Candidate;
