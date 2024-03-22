import { useQuery } from '@tanstack/react-query';
import { type GetArticleResponse, getArticles } from 'api';

type UseGetArticles = {
  firstArticleData: GetArticleResponse;
  restArticlesData: GetArticleResponse[];
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
