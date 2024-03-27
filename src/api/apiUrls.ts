import { generatePath } from 'react-router-dom';

const base = {
  article: '/articles'
};

export const apiUrls = {
  article: {
    getArticles: `${base.article}`,
    getArticle: (path: string) =>
      `${base.article}/${generatePath('/path/:path', { path })}`
  }
};
