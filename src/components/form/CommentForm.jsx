/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/postActions';

const CommentForm = ({ index }) => {
  const dispatch = useDispatch();

  const [commentTitle, setCommentTitle] = useState('');
  const [commentContent, setCommentContent] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createPost({ commentTitle, commentContent, index }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Comment Title"
        value={commentTitle}
        onChange={({ target }) => setCommentTitle(target.value)}
      />
      <input 
        type="text"  
        placeholder="Content"
        value={commentContent}
        onChange={({ target }) => setCommentContent(target.value)}
      />

      <button>Create Comment</button>
    </form>
  );
};

export default CommentForm;
