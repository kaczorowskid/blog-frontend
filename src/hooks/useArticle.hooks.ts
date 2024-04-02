import { useNavigate } from 'react-router';

type UseArticle = {
  handleGoToArticle: () => void;
};

export const useArticle = (path: string): UseArticle => {
  const navigate = useNavigate();

  const handleGoToArticle = (): void => {
    navigate(`article/${path}`);
  };

  return {
    handleGoToArticle
  };
};
