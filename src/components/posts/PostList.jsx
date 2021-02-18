import React from 'react';
import { getPosts } from '../../selectors/postSelector';
import { useSelector } from '../../state/PostProvider';
import { Post } from './Post';

const PostList = () => {
  const posts = useSelector(getPosts);

  const postElements = posts.map(post => (
    <li key={post.title}>
      <Post {...post} />
    </li>
  ));

  return (
    <ul>
      {postElements}
    </ul>
  );
};

export default PostList;
