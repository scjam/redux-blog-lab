import { createPost, deletePost } from '../actions/postActions';
import reducer from './postReducer';

describe('post reducer', () => {
  it('should add post with action CREATE_POST', () => {
    const state = {
      posts: []
    };

    const action = createPost({
      title: 'hello world',
      content: 'bonjour la monde'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      posts: [{
        title: 'hello world',
        content: 'bonjour la monde'
      }]
    });
  });

  it('should delete a post with action DELETE_POST', () => {
    const state = {
      posts: [{
        title: 'hello world',
        content: 'bonjour la monde'
      }]
    };

    const action = deletePost('hello world');

    expect(reducer(state, action)).toEqual({
      posts: []
    });
  });
});
