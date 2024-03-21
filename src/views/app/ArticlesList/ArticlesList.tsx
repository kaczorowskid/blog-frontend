import { Article } from 'features';
import { BlogArticlePreview, LatestArticle } from './components';
import { useControlView, useGetArticles } from './ArticleList.hooks';

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
