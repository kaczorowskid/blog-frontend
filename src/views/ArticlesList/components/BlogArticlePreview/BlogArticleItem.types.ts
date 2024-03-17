import { Dispatch, ReactNode, SetStateAction } from 'react';
import { ArticleData } from 'types';

type BlogArticleCommonProps = {
  articleId: string;
  setArticleId: Dispatch<SetStateAction<string>>;
};

export type BlogArticleItemProps = {
  item: ArticleData;
  children: ReactNode;
} & BlogArticleCommonProps;

export type BlogArticlePreviewProps = {
  data?: ArticleData[];
  article: (id: string) => ReactNode;
} & BlogArticleCommonProps;
