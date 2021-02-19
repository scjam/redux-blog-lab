import { SET_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = {
  comments: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    case DELETE_COMMENT: {
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    }
    default:
      return state;
  }
}
