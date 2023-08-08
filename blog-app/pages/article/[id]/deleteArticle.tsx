import { useEffect } from 'react';
import { useRouter } from 'next/router';

const DeleteArticlePage = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const handleDelete = async () => {
      await fetch(`/api/articles/${id}`, {
        method: 'DELETE',
      });

      router.push('/');
    };

    handleDelete();
  }, [id, router]);

  return (
    <div>
      <h1>Deleting Article...</h1>
    </div>
  );
};

export default DeleteArticlePage;
