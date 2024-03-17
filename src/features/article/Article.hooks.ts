import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetArticleResponse, getArticle } from 'api';

export const useGetArticle = (
  id: string
): UseQueryResult<GetArticleResponse, Error> =>
  useQuery({
    queryKey: ['article'],
    queryFn: () => getArticle(id),
    enabled: !!id
  });
