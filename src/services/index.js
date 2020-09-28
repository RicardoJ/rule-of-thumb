export const saveVote = (voteState) => {
  try {
    return window.localStorage.setItem("vote", JSON.stringify(voteState));
  } catch (error) {
    return false;
  }
};

export const getVoteState = () => {
  try {
    const state = JSON.parse(window.localStorage.getItem("vote"));
    return state;
  } catch (error) {
    return {};
  }
};
