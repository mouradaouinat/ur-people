import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: left;
  width: 46rem;
  margin-bottom: 4rem;
  border-radius: 0.8rem;
  background-color: #fff;
  padding: 1.5rem;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 768px) {
    margin-right: 0;
  }
`;

const Image = styled.div`
  border-radius: 0.4rem;
  overflow: hidden;
  margin-right: 5rem;

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
  margin-top: 2rem;

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
  cursor: pointer;
  border: 0;
  padding: 0.4rem 0.6rem;
  border-radius: 0.3rem;
  background-color: rgba(96, 80, 220, 0.1);
  color: #6050dc;
  font-weight: 700;
  width: 10rem;
  border: 1px solid #6050dc;

  ${props =>
    props.red &&
    css`
      color: rgba(246, 71, 71, 1);
      background-color: rgba(246, 71, 71, 0.1);
      color: rgba(246, 71, 71, 1);
      font-weight: 700;
      width: 10rem;
      border: 1px solid rgba(246, 71, 71, 1);
    `}
`;

const Candidate = ({ id, avatar, onDelete, onDuplicate }) => {
  return (
    <Container>
      <Link className="view-link" to={`/profile/${id}`}>
        <Image>
          <img src={avatar} alt={avatar} />
        </Image>
      </Link>
      <ParamList>
        <li>
          <Button>
            <i className="fa fa-link"></i> Copy link
          </Button>
        </li>
        <li>
          <Button>
            <i className="fa fa-edit"></i> Edit
          </Button>
        </li>
        <li>
          <Button onClick={() => onDuplicate(id)}>
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
