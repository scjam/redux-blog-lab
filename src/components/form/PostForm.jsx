import React, { useState } from 'react';
import { useDispatch } from '';
import { createPost } from '../../actions/postActions';

const PostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createPost({ title, author, subtitle, content }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
      <input 
        type="text"
        placeholder="Content"
        value={content}
        onChange={({ target }) => setContent(target.value)}
      />

      <button>Create A Post</button>
    </form>
  );
};

export default PostForm;
