import { BlogArticleItem } from './BlogArticleItem';
import { type BlogArticlePreviewProps } from './BlogArticleItem.types';

export const BlogArticlePreview = ({
  data,
  articleId,
  setArticleId,
  article
}: BlogArticlePreviewProps): JSX.Element => {
  return (
    <>
      {data?.map((item) => (
        <BlogArticleItem
          key={item.path}
          item={item}
          articleId={articleId}
          setArticleId={setArticleId}
        >
          {article(item.path)}
        </BlogArticleItem>
      ))}
    </>
  );
};
