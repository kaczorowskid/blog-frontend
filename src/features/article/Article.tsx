import { MarkdownComponent } from 'components';
import { useGetArticle } from './Article.hooks';
import {
  BlurArticle,
  ButtonContainer,
  Container,
  StyledButton,
  Wrapper
} from './Article.styled';
import { type ArticleProps } from './Article.types';

export const Article = ({
  id,
  isPreviewMode,
  onGoToArticle
}: ArticleProps): JSX.Element => {
  const { data } = useGetArticle(id);

  return (
    <Wrapper>
      <Container isPreviewMode={isPreviewMode}>
        <MarkdownComponent children={data?.data} />
        <BlurArticle isPreviewMode={isPreviewMode} />
      </Container>
      <ButtonContainer>
        {onGoToArticle && (
          <StyledButton block transparent fontSize={20} onClick={onGoToArticle}>
            Go to article
          </StyledButton>
        )}
      </ButtonContainer>
    </Wrapper>
  );
};
