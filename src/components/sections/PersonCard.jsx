import React from "react";
import styled from "styled-components";
import avatar from "../../avatar.jpg";
import NavBar from "../layout/Navbar.jsx";

const Card = styled.div`
  width: 100%;
  border-radius: 1rem;
  margin: 3rem auto;
  padding: 1rem;

  @media only screen and (max-width: 600px) {
    background: #fff;
    border-radius: 0.5rem;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Wrapper = styled.div`
  width: 25%;
  margin: 2rem 2rem;

  @media only screen and (max-width: 768px) {
    width: 50%;
  }

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

const CardImage = styled.div`
  border-radius: 200px;
  overflow: hidden;
  margin-right: 2.5rem;
  margin-top: 2.5rem;
  float: right;

  @media only screen and (max-width: 600px) {
    border: 0.6rem solid rgba(100, 100, 100, 0.2);
  }
`;

const CardInfo = styled.div`
  margin-top: 3rem;
  margin-left: 1rem;
`;

const CardHeading = styled.h1`
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const CardSubHeading = styled.h2`
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

const HeadingTertiary = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const TextMuted = styled.h2`
  color: #999;
  font-weight: 400;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
`;

const Description = styled.p`
  font-size: 1.3rem;
  margin-bottom: 3rem;

  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

const Button = styled.a`
  &:link,
  &:active {
    text-decoration: none;
    color: #6050dc;
    border-radius: 0.2rem;
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    background-color: #fff;
    font-size: 1.2rem;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const StackUL = styled.ul`
  & li {
    list-style: none;
    display: inline-block;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.3rem 1rem;
    background-color: rgba(0, 0, 0, 0.1);
    color: #6050dc;
    border-radius: 3px;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  @media only screen and (max-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const PersonCard = ({ candidate }) => (
  <Wrapper>
    <NavBar></NavBar>
    <Card>
      <CardImage>
        <img src={candidate.avatarImg} alt="profile" width="55" height="55" />
      </CardImage>
      <CardInfo>
        <CardHeading>{candidate.firstName}</CardHeading>
        <CardHeading>{candidate.lastName}</CardHeading>
        <TextMuted>{candidate.role}</TextMuted>
        <Description>{candidate.bio}</Description>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Button href={candidate.resumeURL} target="_blank">
            <i className="fa fa-file-o"></i> Resume.pdf
          </Button>
        </div>
        <CardSubHeading>Tech Stack</CardSubHeading>
        <Skills>
          <StackUL>
            <HeadingTertiary>Experienced in</HeadingTertiary>
            {candidate.experience.map(exp => (
              <li key={exp}>{exp}</li>
            ))}
          </StackUL>
          <StackUL>
            <HeadingTertiary>Familiar with</HeadingTertiary>
            {candidate.familiarity.map(exp => (
              <li key={exp}>{exp}</li>
            ))}
          </StackUL>
          <StackUL>
            <HeadingTertiary>Proficient in</HeadingTertiary>
            {candidate.profeciency.map(exp => (
              <li key={exp}>{exp}</li>
            ))}
          </StackUL>
        </Skills>
        <CardSubHeading>Languages</CardSubHeading>
        <Description>
          Professioinal working profenciency in{" "}
          {candidate.languages.map(lang => (
            <strong>{lang} </strong>
          ))}
        </Description>
      </CardInfo>
    </Card>
  </Wrapper>
);

export default PersonCard;
