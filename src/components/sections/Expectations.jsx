import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const List = styled.ul`
  li {
    list-style: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    color: #212121;
    margin-bottom: 1rem;

    i {
      color: #6050dc;
      margin-right: 0.5rem;
    }
  }
`;

const Container = styled.div`
  width: 50%;
  height: 100%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const Heading = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 1.4rem;
  color: #212121;
  line-height: 1.8rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const Expectations = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>
          What mistakes you can be 80% sure our developers won’t do?
        </Heading>
        <List>
          <li>
            <i className="fa fa-check-circle"></i> They can write clean code
          </li>
          <li>
            <i className="fa fa-check-circle"></i> They can refactor existing
            code
          </li>
          <li>
            <i className="fa fa-check-circle"></i> They can write tests
          </li>
          <li>
            <i className="fa fa-check-circle"></i> They can do proper &
            optimized debbuging
          </li>
          <li>
            <i className="fa fa-check-circle"></i> They can fix bugs and issues
          </li>
          <li>
            <i className="fa fa-check-circle"></i> They can git and gitflow
          </li>
        </List>
      </Container>
      <Container>
        <Heading>
          What can our developers be expected to do, concretely?
        </Heading>
        <List>
          <li>
            <i className="fa fa-check-circle"></i> Mess up the code base due to
            lack of Git mastery
          </li>
          <li>
            <i className="fa fa-check-circle"></i> Ship code that is not clean
          </li>
          <li>
            <i className="fa fa-check-circle"></i> See features change as hurdle
          </li>
          <li>
            <i className="fa fa-check-circle"></i>
            Not understanding of importance of iterations while building product
          </li>
          <li>
            <i className="fa fa-check-circle"></i> Not be stack agnostic
          </li>
          <li>
            <i className="fa fa-check-circle"></i> Waste time when stuck
            understanding what needs to be done
          </li>
        </List>
      </Container>
    </Wrapper>
  );
};

export default Expectations;
