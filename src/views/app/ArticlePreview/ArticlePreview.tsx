import { useParams } from 'react-router-dom';
import { Article } from 'features';

export const ArticlePreview = (): JSX.Element => {
  const { path } = useParams<{ path: string }>();

  return <Article path={path as string} />;
};
