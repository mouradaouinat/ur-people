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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deleniti placeat illo distinctio dignissimos officiis dolorem corrupti vero laudantium! Dignissimos recusandae.",
      resumeURL: "https://www.google.com",
      experience: ["html", "css", "JavaScript"],
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
      resumeURL: "https://www.google.com",
      experience: ["nodejs", "vue", "JavaScript", "No-SQL"],
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
