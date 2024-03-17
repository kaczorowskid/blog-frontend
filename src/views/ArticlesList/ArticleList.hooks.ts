import { Dispatch, SetStateAction, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { GetArticleResponse, getArticles } from 'api';

type UseControlView = {
  articleId: string;
  setArticleId: Dispatch<SetStateAction<string>>;
  closeArticle: () => void;
};

type UseGetArticles = {
  firstArticleData: GetArticleResponse;
  restArticlesData: GetArticleResponse[];
};

export const useControlView = (): UseControlView => {
  const [articleId, setArticleId] = useState<string>('');

  const closeArticle = () => {
    setArticleId('');
  };

  return {
    articleId,
    setArticleId,
    closeArticle
  };
};

export const useGetArticles = (): UseGetArticles => {
  const { data } = useQuery({
    queryKey: ['articles'],
    queryFn: getArticles
  });

  const [firstArticleData, ...restArticlesData] = data ?? [];

  return {
    firstArticleData,
    restArticlesData
  };
};
