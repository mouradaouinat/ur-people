import React from "react";
import PersonCard from "../sections/PersonCard.jsx";
import Main from "../sections/Main.jsx";
import styled from "styled-components";
import Navigation from "../layout/Navigation.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Profile = () => (
  <Container>
    <PersonCard></PersonCard>
    <Main></Main>
    <Navigation></Navigation>
  </Container>
);

export default Profile;
