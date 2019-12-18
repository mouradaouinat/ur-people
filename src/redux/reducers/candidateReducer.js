import { DELETE_CANDIDATE } from "../actions/types";

const initialState = {
  candidates: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CANDIDATE:
      return state;
    default:
      return state;
  }
};
