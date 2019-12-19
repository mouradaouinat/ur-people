import React from "react";
import styled from "styled-components";
import jibleLogo from "../../jible-logo.svg";

const Container = styled.div`
  background: #fff;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  margin: 4rem 0;
  padding: 3rem 1rem;
  border-radius: 1rem;
`;

const ProjectImage = styled.div`
  margin-top: 4rem;

  img {
    height: 4rem;
  }
`;

const Content = styled.div`
  margin-left: 2rem;
`;

const StackUL = styled.ul`
  margin-bottom: 2rem;

  & li {
    list-style: none;
    display: inline-block;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.3rem 1rem;
    background-color: rgba(96, 80, 220, 0.1);
    color: #6050dc;
    border-radius: 3px;
  }
`;

const Heading = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #909090;
  line-height: 1.6rem;
`;

const WorkedOn = () => {
  return (
    <Container>
      <ProjectImage>
        <img src={jibleLogo} alt="jible" />
      </ProjectImage>
      <Content>
        <Heading>Tech Stack</Heading>
        <StackUL>
          <li>Linux</li>
          <li>Bash</li>
          <li>VMware</li>
          <li>Vsphere 6</li>
        </StackUL>
        <Description>
          An on demand service that picks-up anything you requested through the
          app and delivers it to your door within one hour. The service is
          carried-out by independent couriers, called Robios{" "}
          <span role="img" aria-label="biker">
            🚴‍♀️
          </span>
          . who can take 1 or more orders to allow users to share the cost of
          delivery.
        </Description>
      </Content>
    </Container>
  );
};

export default WorkedOn;
