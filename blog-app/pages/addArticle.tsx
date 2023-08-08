import { useState } from 'react';
import AddArticleForm from '../components/AddArticleForm'; // Import your AddArticleForm component

const AddArticlePage = () => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddArticle = async (newArticleData) => {
    try {
      setIsAdding(true);
      
      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newArticleData),
      });
      
      if (response.ok) {
        // Handle success, update UI, navigate to another page, etc.


      } else {
        // Handle error scenarios
      }
    } catch (error) {
      // Handle fetch or other errors
      console.error(error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div>
      <h1>Add Article</h1>
      <AddArticleForm onSubmit={handleAddArticle} isAdding={isAdding} />
    </div>
  );
};

export default AddArticlePage;


