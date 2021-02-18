import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';

export const Post = ({ title, content }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deletePost(title));
  };

  return (
    <>
      <dl>
        <dt>Title</dt>
        <dd>{title}</dd>

        <dt>Content</dt>
        <dd>{content}</dd>
      </dl>
      <button onClick={handleClick}>Delete</button>
    </>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};
