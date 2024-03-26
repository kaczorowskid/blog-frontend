import { useState } from 'react';
import { Article } from 'features';
import { useGetArticles } from './ArticleList.hooks';
import { BlogArticlePreview, LatestArticle } from './components';

export const ArticlesList = (): JSX.Element => {
  const [articleId, setArticleId] = useState<string>('');
  const { firstArticleData, restArticlesData } = useGetArticles();

  return (
    <>
      <h1>Welcome to the blog</h1>
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
