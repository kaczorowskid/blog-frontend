import { useNavigate } from 'react-router';

type UseArticle = {
  handleGoToArticle: () => void;
};

export const useArticle = (id: string): UseArticle => {
  const navigate = useNavigate();

  const handleGoToArticle = (): void => {
    navigate(`article/${id}`);
  };

  return {
    handleGoToArticle
  };
};
