import React from "react";
import {
  Timeline,
  Content,
  ContentYear,
  ContentBody,
  Description
} from "vertical-timeline-component-react";

const Education = ({ candidate }) => {
  return (
    <section id="education">
      <Timeline>
        {candidate.education.map(edu => (
          <Content key={edu.school}>
            <ContentYear year={`${edu.start} - ${edu.end}`} />
            <ContentBody title={edu.title}>
              <Description text={edu.school} />
            </ContentBody>
          </Content>
        ))}
      </Timeline>
    </section>
  );
};

export default Education;
