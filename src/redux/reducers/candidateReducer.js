import { DELETE_CANDIDATE, DUPLICATE_CANDIDATE } from "../actions/types";
import { candidates } from "../../services/candidateService";
import uuid from "uuid";
const initialState = {
  candidates
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
    case DUPLICATE_CANDIDATE:
      return {
        ...state,
        candidates: [
          ...state.candidates,
          {
            ...state.candidates.find(item => item.id === action.payload),
            id: uuid()
          }
        ]
      };
    default:
      return state;
  }
};
