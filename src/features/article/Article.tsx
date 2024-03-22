import { MarkdownComponent } from 'components';
import { useArticle } from 'hooks';
import { useGetArticle } from './Article.hooks';
import {
  BlurArticle,
  ButtonContainer,
  Container,
  StyledButton,
  Wrapper
} from './Article.styled';
import { type ArticleProps } from './Article.types';

export const Article = ({ id, isPreviewMode }: ArticleProps): JSX.Element => {
  const { handleGoToArticle } = useArticle(id);
  const { data } = useGetArticle(id);

  return (
    <Wrapper>
      <Container isPreviewMode={isPreviewMode}>
        <MarkdownComponent children={data?.data} />
        <BlurArticle isPreviewMode={isPreviewMode} />
      </Container>
      <ButtonContainer>
        {isPreviewMode && (
          <StyledButton
            block
            transparent
            fontSize={20}
            onClick={handleGoToArticle}
          >
            Go to article
          </StyledButton>
        )}
      </ButtonContainer>
    </Wrapper>
  );
};
