import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 3rem;
  position: relative;
  margin-bottom: 3rem;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

const ContentHeading = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  img {
    border-radius: 100px;
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
  }

  h3 {
    margin-top: 0.5rem;
    margin-bottom: 0.8rem;
  }
`;

const FeedBack = styled.p`
  margin-bottom: 1rem;
`;

const Rating = styled.span`
  padding: 0.3rem;
  background-color: rgba(96, 80, 220, 0.1);
  color: #6050dc;
  position: absolute;
  right: 1rem;
  top: 2rem;
  margin-right: 0.5rem;
`;

const TeamFeedback = () => (
  <Container>
    <ContentHeading>
      <div>
        <img
          src="https://ca.slack-edge.com/T02QFPDEX-U02QFPDEZ-81d30bcde900-512"
          alt="Owner of UR"
        />
      </div>
      <div>
        <h3>Yassine El Kechachi</h3>
        <span>Talent Aquisition</span>
      </div>
      <Rating>
        Yes{" "}
        <span role="img" aria-label="emoji">
          👍
        </span>
      </Rating>
    </ContentHeading>
    <FeedBack>
      Has proven ability to produce creative, original ideas, plans, products or
      methods even if they’re not always practical, in line with organization
      needs, or successful. - Passion - Culture fit - Communication - Collab
    </FeedBack>
  </Container>
);

export default TeamFeedback;
