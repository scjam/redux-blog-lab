import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';
import CommentForm from '../form/CommentForm';
import CommentList from '../comments/CommentList';

export const Post = ({ title, content, index }) => {
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
    
      <CommentForm index={index} />
      <CommentList />
    
    </>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};
