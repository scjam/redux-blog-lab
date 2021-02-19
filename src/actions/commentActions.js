export const SET_COMMENT = 'SET_COMMENT';
export const setComment = (postIndex, comment) => ({
  type: SET_COMMENT,
  payload: { postIndex, comment }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (postIndex, commentIndex) => ({
  type: DELETE_COMMENT,
  payload: { postIndex, commentIndex }
});
