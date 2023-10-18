import { DOWN_VOTE, UP_VOTE } from "./constants";

const initialState = 0;

const votesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UP_VOTE:
      return state + 1;
    case DOWN_VOTE:
      return state - 1;
    default:
      return state;
  }
};

export { votesReducer };
