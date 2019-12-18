import React from "react";
import {
  Timeline,
  Content,
  ContentYear,
  ContentBody,
  Description
} from "vertical-timeline-component-react";

const Education = () => {
  return (
    <Timeline>
      <Content>
        <ContentYear year="2018" />
        <ContentBody title="Amazing Title">
          <Description
            text="I'm an amazing event"
            optional="I'm an amazing optional text"
          />
        </ContentBody>
      </Content>
      <Content>
        <ContentYear year="2018" />
        <ContentBody title="Amazing Title">
          <Description
            text="I'm an amazing event"
            optional="I'm an amazing optional text"
          />
        </ContentBody>
      </Content>
      <Content>
        <ContentYear year="2018" />
        <ContentBody title="Amazing Title">
          <Description
            text="I'm an amazing event"
            optional="I'm an amazing optional text"
          />
        </ContentBody>
      </Content>
      <Content>
        <ContentYear year="2018" />
        <ContentBody title="Amazing Title">
          <Description
            text="I'm an amazing event"
            optional="I'm an amazing optional text"
          />
        </ContentBody>
      </Content>
    </Timeline>
  );
};

export default Education;
