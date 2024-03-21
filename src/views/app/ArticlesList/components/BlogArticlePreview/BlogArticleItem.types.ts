import { type Dispatch, type ReactNode, type SetStateAction } from 'react';
import { type ArticleData } from 'types';

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
