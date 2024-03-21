import { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { GetArticleResponse, getArticles } from 'api';

type UseControlView = {
  articleId: string;
  setArticleId: Dispatch<SetStateAction<string>>;
  handleGoToArticle: (id: string) => void;
};

type UseGetArticles = {
  firstArticleData: GetArticleResponse;
  restArticlesData: GetArticleResponse[];
};

export const useControlView = (): UseControlView => {
  const [articleId, setArticleId] = useState<string>('');
  const navigate = useNavigate();

  const handleGoToArticle = (id: string) => {
    navigate(`article/${id}`);
  };

  return {
    articleId,
    setArticleId,
    handleGoToArticle
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
