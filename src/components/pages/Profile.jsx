import React, { Component } from "react";
import PersonCard from "../sections/PersonCard.jsx";
import Main from "../sections/Main.jsx";
import styled from "styled-components";
import Navigation from "../layout/Navigation.jsx";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

class Profile extends Component {
  render() {
    const { id } = this.props.match.params;
    const { candidates } = this.props;
    const candidate = candidates.find(candidate => candidate.id === id);
    return (
      <Container>
        <PersonCard candidate={candidate}></PersonCard>
        <Main candidate={candidate}></Main>
        <Navigation></Navigation>
      </Container>
    );
  }
}

Profile.propTypes = {
  candidates: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  candidates: state.people.candidates
});

export default connect(mapStateToProps, null)(Profile);
