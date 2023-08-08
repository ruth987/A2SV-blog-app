import React, { useState } from 'react';
import formStyles from '../styles/Form.module.css';

const AddArticleForm = ({ onSubmit, isAdding }) => {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArticle = {
      id: Math.floor(Math.random() * 1000) + 1,
      title,
      excerpt,
      body,
    };

    // Prevent submitting while adding
    if (isAdding) {
      return;
    }

    await onSubmit(newArticle);

    // Clear form fields after submission
    setTitle('');
    setExcerpt('');
    setBody('');
  };

  return (
    <form className={formStyles['form-container']} onSubmit={handleSubmit}>
      <input
        className={formStyles['form-input']}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        className={formStyles['form-input']}
        type="text"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
        placeholder="Excerpt"
      />
      <textarea
        className={formStyles['form-textarea']}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      />
      <button className={formStyles['form-button']} type="submit" disabled={isAdding}>
        {isAdding ? 'Adding...' : 'Add Article'}
      </button>
    </form>
  );
};

export default AddArticleForm;
