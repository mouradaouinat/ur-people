import React from "react";
import WorkExperience from "./WorkExperience.jsx";
import SectionHeading from "../layout/SectionHeading.jsx";
import styled from "styled-components";
import CodingChallenge from "./CodingChallenge.jsx";
import TeamFeedback from "./TeamFeedback.jsx";
import Education from "./Education";
import Expectations from "./Expectations";
import Courses from "./Courses.jsx";
import WorkedOn from "./WorkedOn.jsx";
import Progress from "./Progress.jsx";

const Heading = styled.h1`
  text-transform: uppercase;
  color: #6050dc;
  font-size: 1.5rem;
  text-align: left;
  font-weight: 500;
  letter-spacing: 0.1rem;
`;

const HeadingDescription = styled.h3`
  color: #888;
  font-weight: 300;
  margin-top: 1rem;
`;

const Container = styled.div`
  width: 40%;
  margin-top: 3rem;
  margin-left: 3rem;
  margin-right: 4rem;

  @media only screen and (max-width: 600px) {
    width: 90%;
    margin: auto;
  }
`;

const Main = ({ candidate }) => {
  return (
    <Container>
      <Heading>General information</Heading>
      <SectionHeading title="Work information"></SectionHeading>
      <WorkExperience candidate={candidate}></WorkExperience>
      <SectionHeading title="Education"></SectionHeading>
      <Education candidate={candidate}></Education>
      <Heading>united remote assessement</Heading>
      <HeadingDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        quaerat sunt autem illum maxime repellendus optio
      </HeadingDescription>
      <SectionHeading title="Coding Challenge"></SectionHeading>
      <HeadingDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        quaerat sunt autem illum maxime repellendus optio
      </HeadingDescription>
      <CodingChallenge candidate={candidate}></CodingChallenge>
      <SectionHeading title="Team Feedback"></SectionHeading>
      <TeamFeedback></TeamFeedback>
      <Heading>Bootcamp assessement</Heading>
      <HeadingDescription>
        Every season, there’s always a new must-have (or at least must try)
        beauty product that comes out — the newest color palette in make-up, the
        latest in skin care, new scents, etc., etc. Beauty junkies know not to
        resist these temptations because you never know what amazing new product
        you might find. Even when people say beauty is skin deep and it’s what’s
        inside that matters it is always easier to make people listen to what
        you have to say when you come in a good “package”.
      </HeadingDescription>
      <SectionHeading title="Progress"></SectionHeading>
      <Progress candidate={candidate}></Progress>
      <SectionHeading title="Worked On"></SectionHeading>
      <WorkedOn></WorkedOn>
      <SectionHeading title="Courses"></SectionHeading>
      <Courses></Courses>
      <Expectations></Expectations>
    </Container>
  );
};

export default Main;
