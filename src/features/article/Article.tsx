import { Button, MarkdownComponent } from 'components';
import { useGetArticle } from './Article.hooks';
import { Container, Wrapper } from './Article.styled';
import { ArticleProps } from './Article.types';

export const Article = ({ id, isPreviewMode, goBack }: ArticleProps) => {
  const { data } = useGetArticle(id);

  return (
    <Wrapper>
      <Container isPreviewMode={isPreviewMode}>
        <MarkdownComponent children={data?.data} />
        {goBack && <Button onClick={goBack}>Go back</Button>}
      </Container>
    </Wrapper>
  );
};
