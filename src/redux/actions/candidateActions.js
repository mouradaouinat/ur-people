import { DELETE_CANDIDATE } from "./types";

const deleteCandidate = id => {
  return {
    type: DELETE_CANDIDATE,
    payload: id
  };
};

export default {
  deleteCandidate
};
