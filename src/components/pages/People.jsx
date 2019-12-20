import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import urPeople from "../../ur-people.svg";
import Condidate from "../Candidate";
import candidateActions from "../../redux/actions/candidateActions";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 3rem;

  @media only screen and (max-width: 600px) {
    max-width: 350px;
    text-align: center;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Logo = styled.div`
  margin-top: 1.2rem;

  @media only screen and (max-width: 600px) {
    margin: auto;
    margin-bottom: 1rem;
  }
`;

const Search = styled.div`
  input {
    all: unset;
    width: 30rem;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 600px) {
    margin: auto;
  }
`;

const Condidates = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
`;

const Banner = styled.div`
  background-color: #fff;
  border-radius: 0.8rem;
  padding: 2rem 1rem;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  margin-top: 5rem;
  margin-bottom: 4rem;

  h1 {
    font-weight: 700;
  }
`;

class People extends Component {
  handleDelete = id => {
    const { deleteCandidate } = this.props;
    deleteCandidate(id);
  };

  handleDuplicate = id => {
    const { duplicateCandidate } = this.props;
    duplicateCandidate(id);
  };

  render() {
    const url = window.location.href;
    const { candidates } = this.props;
    console.log(url);
    return (
      <Container>
        <Nav>
          <Logo>
            <Link to="/">
              <img src={urPeople} alt="UR People" />
            </Link>
          </Logo>
          <Search>
            <input type="text" placeholder="Search candidate" />
          </Search>
        </Nav>
        <Banner>
          <h1>All Candidates</h1>
        </Banner>
        <Condidates>
          {candidates.map(candidate => (
            <Condidate
              key={candidate.id}
              id={candidate.id}
              avatar={candidate.avatarImg}
              onDelete={this.handleDelete}
              onDuplicate={this.handleDuplicate}
            ></Condidate>
          ))}
        </Condidates>
      </Container>
    );
  }
}

People.propTypes = {
  candidates: PropTypes.array.isRequired,
  deleteCandidate: PropTypes.func.isRequired,
  duplicateCandidate: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  candidates: state.people.candidates
});

const mapDispatchToProps = dispatch => ({
  deleteCandidate: id => {
    dispatch(candidateActions.deleteCandidate(id));
  },
  duplicateCandidate: id => {
    dispatch(candidateActions.duplicateCandidate(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(People);
