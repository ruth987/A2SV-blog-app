import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const EditArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [article, setArticle] = useState({});
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const fetchArticleData = async () => {

      const response = await fetch(`/api/articles/${id}`);
      const data = await response.json();
      setArticle(data);
      setTitle(data.title);
      setExcerpt(data.excerpt);
      setBody(data.body);
    };

    fetchArticleData();
  }, [id]);

  const handleSave = async () => {
    const updatedArticle = { id, title, excerpt, body };
    await fetch(`/api/articles/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedArticle),
    });

    router.push(`/article/${id}`);
  };

  const handleDelete = async () => {
    await fetch(`/api/articles/${id}`, {
      method: 'DELETE',
    });

    router.push('/');
  };

  return (
    <div>
      <h1>Edit Article</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Excerpt" />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body" />
      <button onClick={handleSave}>Save Changes</button>
      <button onClick={handleDelete}>Delete Article</button>
    </div>
  );
};

export default EditArticlePage;
