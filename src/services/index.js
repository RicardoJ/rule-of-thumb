export const saveVote = (voteState) => {
  let statusVote = window.localStorage.setItem("vote", voteState);
  return statusVote ? false : statusVote;
 
};

export const getVoteState = () => {
  return window.localStorage.getItem("vote");
};
