import { generatePath } from 'react-router-dom';

const base = {
  article: '/articles'
};

export const apiUrls = {
  article: {
    getArticles: `${base.article}`,
    getArticle: (id: string) =>
      `${base.article}/${generatePath('/id/:id', { id })}`
  }
};
