import { type GetArticleResponse, HttpMethod, apiCall, apiUrls } from 'api';

export const getArticles = async (): Promise<GetArticleResponse[]> => {
  const {
    article: { getArticles }
  } = apiUrls;

  const { data } = await apiCall<void, GetArticleResponse[]>(
    getArticles,
    HttpMethod.GET
  );

  return data;
};

export const getArticle = async (id: string): Promise<GetArticleResponse> => {
  const {
    article: { getArticle }
  } = apiUrls;

  const { data } = await apiCall<void, GetArticleResponse>(
    getArticle(id),
    HttpMethod.GET
  );

  return data;
};
