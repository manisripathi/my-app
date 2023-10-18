import { DOWN_VOTE, UP_VOTE } from "./constants";

export const upvote = () => {
  return {
    type: UP_VOTE,
  };
};

export const downVote = () => {
  return {
    type: DOWN_VOTE,
  };
};
