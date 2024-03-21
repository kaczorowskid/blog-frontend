import { useParams } from 'react-router-dom';
import { Article } from 'features';

export const ArticlePreview = () => {
  const { id } = useParams<{ id: string }>();

  return <Article id={id as string} />;
};
