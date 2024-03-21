import { Article } from 'features';
import { useControlView, useGetArticles } from './ArticleList.hooks';
import { BlogArticlePreview, LatestArticle } from './components';

export const ArticlesList = () => {
  const { articleId, setArticleId, handleGoToArticle } = useControlView();
  const { firstArticleData, restArticlesData } = useGetArticles();

  return (
    <>
      <LatestArticle data={firstArticleData} />
      <BlogArticlePreview
        data={restArticlesData}
        articleId={articleId}
        setArticleId={setArticleId}
        article={(id) => (
          <Article
            isPreviewMode
            id={id}
            onGoToArticle={() => handleGoToArticle(id)}
          />
        )}
      />
    </>
  );
};
