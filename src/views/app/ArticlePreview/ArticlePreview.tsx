import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Article } from 'features';

export const ArticlePreview = (): JSX.Element => {
  const { path } = useParams<{ path: string }>();

  return (
    <>
      <Helmet>
        <title>Article | Blog article preview</title>
        <meta name='description' content='Article preview' />
      </Helmet>

      <Article path={path as string} />
    </>
  );
};
