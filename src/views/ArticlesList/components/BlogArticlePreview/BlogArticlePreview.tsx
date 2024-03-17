import { BlogArticleItem } from './BlogArticleItem';
import { BlogArticlePreviewProps } from './BlogArticleItem.types';

export const BlogArticlePreview = ({
  data,
  articleId,
  setArticleId,
  article
}: BlogArticlePreviewProps) => {
  return (
    <>
      {data?.map((item) => (
        <BlogArticleItem
          key={item._id}
          item={item}
          articleId={articleId}
          setArticleId={setArticleId}
        >
          {article(item._id)}
        </BlogArticleItem>
      ))}
    </>
  );
};
