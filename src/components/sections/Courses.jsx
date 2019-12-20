import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 3rem 0;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  background: #fff;

  border-radius: 0 0.5rem 0.5rem 0.5rem;
  box-shadow: 0px 2px 10px rgba(235, 235, 235, 0.5);
  padding-top: 2rem;

  @media only screen and (max-width: 600px) {
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;

const Course = styled.div`
  display: flex;
  padding: 1rem;
`;

const CourseTitle = styled.div`
  width: 30%;
  font-weight: 500;
  color: #6050dc;
  font-size: 1.2rem;
`;

const CourseContent = styled.div`
  padding-left: 4rem;
  p {
    font-size: 1.1rem;
    line-height: 1.8rem;
    margin-left: 0;
  }
`;

const Courses = () => {
  return (
    <Wrapper id="courses">
      <Container>
        <Course>
          <CourseTitle>React Authentification</CourseTitle>
          <CourseContent>
            <p>
              In this course, you will learn how to implement the Basic
              Authentication scheme in a React application using an Express REST
              API.
            </p>
          </CourseContent>
        </Course>
        <Course>
          <CourseTitle>React Authentification</CourseTitle>
          <CourseContent>
            <p>
              In this course, you will learn how to implement the Basic
              Authentication scheme in a React application using an Express REST
              API.
            </p>
          </CourseContent>
        </Course>
        <Course>
          <CourseTitle>React Authentification</CourseTitle>
          <CourseContent>
            <p>
              In this course, you will learn how to implement the Basic
              Authentication scheme in a React application using an Express REST
              API.
            </p>
          </CourseContent>
        </Course>
      </Container>
    </Wrapper>
  );
};

export default Courses;
