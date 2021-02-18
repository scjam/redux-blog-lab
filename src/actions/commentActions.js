export const SET_COMMENT = 'SET_COMMENT';
export const setComment = (index, answer) => ({
  type: SET_COMMENT,
  payload: { index, answer }
});
