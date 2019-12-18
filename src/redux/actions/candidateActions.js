import DELETE_CANDIDATE from "./types";

export const deleteCandidate = id => {
  return {
    type: DELETE_CANDIDATE,
    payload: id
  };
};
