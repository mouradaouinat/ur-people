import { DELETE_CANDIDATE } from "../actions/types";
const initialState = {
  candidates: [
    {
      id: "1",
      firstName: "Mourad",
      lastName: "Aouinat",
      role: "Front-end Web Developer",
      avatarImg:
        "https://ca.slack-edge.com/T02QFPDEX-UREJMDJAD-233015db6a1d-512",
      bio:
        "bachelor in financial management from the university of Ibn Tofail looking for an Internship or a job opportunity in finance or accounting. Organized and dedicated individual with a mind for numbers and passion for financial theory, Also a coding hobbyist looking to bridge the two. ",
      resumeURL: "https://www.linkedin.com/in/mourad-aouinat-981912133/",
      experience: ["html", "css", "JavaScript", "React"],
      familiarity: ["python", "PHP"],
      profeciency: ["VS code", "Bootstrap"],
      languages: ["French", "English"],
      workExperience: [
        {
          title: "Front-End web developer",
          company: "United Remote",
          location: "Rabat",
          start: "2019",
          end: "2020",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deleniti placeat illo distinctio dignissimos officiis dolorem corrupti vero laudantium! Dignissimos recusandae."
        },
        {
          title: "Front-End web developer",
          company: "United Remote",
          location: "Rabat",
          year: "2019",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deleniti placeat illo distinctio dignissimos officiis dolorem corrupti vero laudantium! Dignissimos recusandae."
        }
      ]
    },
    {
      id: "2",
      firstName: "Youssef",
      lastName: "Boumezough",
      role: "Full stack Web Developer",
      avatarImg:
        "https://ca.slack-edge.com/T02QFPDEX-UQ0AHKWFR-a46468c42a73-512",
      bio:
        "Ex Google user, Ex youtuber, like spending time on netflix and on spotify for no reason",
      resumeURL:
        "https://www.linkedin.com/in/ussef-boumezough/?originalSubdomain=ma",
      experience: ["nodejs", "vue", "JavaScript", "No-SQL"],
      familiarity: ["Node.js", "Ruby on Rails"],
      profeciency: ["VS code", "Atom"],
      languages: ["French", "English"],
      workExperience: [
        {
          title: "Full stack web developer",
          company: "TheCastle",
          location: "Fez",
          start: "2019",
          end: "2019",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deleniti placeat illo distinctio dignissimos officiis dolorem corrupti vero laudantium! Dignissimos recusandae."
        },
        {
          title: "Full Stack Web Developer",
          company: "United Remote",
          location: "Rabat",
          start: "2019",
          end: "2020",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deleniti placeat illo distinctio dignissimos officiis dolorem corrupti vero laudantium! Dignissimos recusandae."
        }
      ]
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CANDIDATE:
      return {
        ...state,
        candidates: state.candidates.filter(
          candidate => candidate.id !== action.payload
        )
      };

    default:
      return state;
  }
};
