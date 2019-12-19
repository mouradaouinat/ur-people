import { DELETE_CANDIDATE, DUPLICATE_CANDIDATE } from "./types";

const deleteCandidate = id => {
  return {
    type: DELETE_CANDIDATE,
    payload: id
  };
};

const duplicateCandidate = id => {
  return {
    type: DUPLICATE_CANDIDATE,
    payload: id
  };
};

export default {
  deleteCandidate,
  duplicateCandidate
};
