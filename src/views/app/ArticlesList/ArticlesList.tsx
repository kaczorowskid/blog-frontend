import { useState } from 'react';
import { Article } from 'features';
import { useGetArticles } from './ArticleList.hooks';
import { BlogArticlePreview, LatestArticle } from './components';

export const ArticlesList = (): JSX.Element => {
  const [articleId, setArticleId] = useState<string>('');
  const { firstArticleData, restArticlesData } = useGetArticles();

  return (
    <>
      <LatestArticle data={firstArticleData} />
      <BlogArticlePreview
        data={restArticlesData}
        articleId={articleId}
        setArticleId={setArticleId}
        article={(id) => <Article isPreviewMode id={id} />}
      />
    </>
  );
};
