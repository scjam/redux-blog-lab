/* eslint-disable max-len */
import { getPosts } from './postSelector';

describe('post selectors', () => {
  it('should select your posts from state', () => {
    const state = {
      posts: {
        posts: [{ title: 'hello world', content: 'bonjour la monde' }]
      }
    };
    const posts = getPosts(state);
    expect(posts).toEqual([{ title: 'hello world', content: 'bonjour la monde' }]);
  });
});
