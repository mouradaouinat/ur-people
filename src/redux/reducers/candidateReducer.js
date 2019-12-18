import { DELETE_CANDIDATE } from "../actions/types";

const initialState = {
  candidates: [
    {
      id: "9999",
      firstName: "Mourad",
      lastName: "Aouinat",
      role: "Front-end Web Developer",
      avatarImg: "//gravatar.com/avatar/5fd5dab1983b6b4f01d95a3cc563fada?s=200",
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
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CANDIDATE:
      return state;
    default:
      return state;
  }
};
