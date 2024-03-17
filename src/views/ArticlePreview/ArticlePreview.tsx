import { Article } from 'features';
import { useParams } from 'react-router-dom';

export const ArticlePreview = () => {
  const { id } = useParams<{ id: string }>();

  return <Article id={id as string} />;
};
