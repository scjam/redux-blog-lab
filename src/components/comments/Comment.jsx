import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';

export const Comment = ({ commentTitle, commentContent }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteComment(commentTitle));
  };

  return (
    <>
      <dl>
        <dt>Comment Title</dt>
        <dd>{commentTitle}</dd>

        <dt>Comment Content</dt>
        <dd>{commentContent}</dd>
      </dl>
      <button onClick={handleClick}>Delete</button>
    
    
    
    </>
  );
};

Comment.propTypes = {
  commentTitle: PropTypes.string.isRequired,
  commentContent: PropTypes.string.isRequired
};
