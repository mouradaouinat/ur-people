import React from "react";
import styled from "styled-components";

const MainHeading = styled.h1`
  font-size: 2.2rem;
  margin-right: 1.5rem;
  font-weight: 500;
  position: relative;
  display: inline-block;

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

const MainHeadingWrapper = styled.div`
  padding: 0.1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Dot = styled.div`
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 1rem;
  background-color: #6050dc;
  margin: 0.5rem 1rem;
  display: inline-block;

  @media only screen and (max-width: 600px) {
    margin-top: 0.5rem 1rem;
  }
`;

const SectionHeading = ({ title, line }) => (
  <MainHeadingWrapper>
    <Dot></Dot>
    <MainHeading line>{title}</MainHeading>
  </MainHeadingWrapper>
);

export default SectionHeading;
