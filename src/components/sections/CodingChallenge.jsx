import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const CardTitle = styled.h1`
  font-weight: 300;
  font-size: 1.6rem;
  margin-bottom: 3rem;

  @media only screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const CardLink = styled.a`
  text-decoration: none;
  color: #6050dc;
`;

const EvaluationCard = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  padding-top: 1rem;
  overflow: hidden;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
`;

const MiniHeading = styled.h5`
  color: #777;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1rem;
  margin: 1rem;
`;

const EvaluationList = styled.ul`
  & li {
    list-style: none;
    padding: 1rem 0;
    padding-left: 1rem;
    cursor: pointer;

    &:not(:last-child) {
      border-bottom: 1px solid #eee;
    }

    &:first-child {
      margin-top: 1rem;
    }

    &:hover {
      background-color: rgba(96, 80, 220, 0.1);
    }
  }
`;

const Rating = styled.span`
  padding: 0.3rem;
  /* background-color: rgba(96, 80, 220, 0.1);
  color: #6050dc; */
  float: right;
  margin-right: 0.5rem;
`;

const CodingChallenge = () => {
  return (
    <section>
      <Container>
        <Card>
          <CardTitle>Reposotory Requirement</CardTitle>
          <CardLink href="#!">
            web-coding-challenge <i className="fa fa-external-link"></i>
          </CardLink>
        </Card>
        <Card>
          <CardTitle>Submissions</CardTitle>
          <CardLink href="#!">
            web-coding-challenge <i className="fa fa-external-link"></i>
          </CardLink>
        </Card>
        <Card>
          <CardTitle>Live Demo</CardTitle>
          <CardLink href="#!">
            web-coding-challenge <i className="fa fa-external-link"></i>
          </CardLink>
        </Card>
      </Container>
      <EvaluationCard>
        <MiniHeading>Our Evaluation</MiniHeading>
        <EvaluationList>
          <li>
            Respect for requirement{" "}
            <Rating>
              Yes{" "}
              <span role="img" aria-label="emoji">
                👍
              </span>
            </Rating>
          </li>
          <li>
            Git best Practices{" "}
            <Rating>
              Strong Yes{" "}
              <span role="img" aria-label="emoji">
                👍👍
              </span>
            </Rating>
          </li>
          <li>
            Error handling{" "}
            <Rating>
              Not Sure{" "}
              <span role="img" aria-label="emoji">
                🤷‍♂️
              </span>
            </Rating>
          </li>
          <li>
            Code readability{" "}
            <Rating>
              Yes <span role="img" aria-label="emoji"></span>👍
            </Rating>
          </li>
          <li>
            Project Folder Structure{" "}
            <Rating>
              Not Sure{" "}
              <span role="img" aria-label="emoji">
                🤷‍♂️
              </span>
            </Rating>
          </li>
          <li>
            Project Folder Structure{" "}
            <Rating>
              Strong Yes{" "}
              <span role="img" aria-label="emoji">
                👍👍
              </span>
            </Rating>
          </li>
        </EvaluationList>
      </EvaluationCard>
    </section>
  );
};

export default CodingChallenge;
