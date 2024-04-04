import { Tag } from 'components';
import { useAccessibility, useArticle } from 'hooks';
import { formatDate } from 'utils';
import {
  Date,
  Description,
  Image,
  ImageWrapper,
  Overlay,
  OverlayContent,
  Title
} from './LatestArticle.styled';
import { type LatestArticleProps } from './LatestAtricle.types';

export const LatestArticle = ({ data }: LatestArticleProps): JSX.Element => {
  const { date, description, thumbnail, path, title, tag } = data ?? {};

  const { handleGoToArticle } = useArticle(path);
  const { onKeyDown } = useAccessibility(handleGoToArticle);

  return (
    <ImageWrapper
      tabIndex={0}
      role='button'
      aria-label='Latest article'
      onKeyDown={onKeyDown}
    >
      <Image src={thumbnail} alt={title} />
      <Overlay onClick={handleGoToArticle}>
        <OverlayContent>
          <Tag>{tag}</Tag>
          <Date>{date && formatDate(date)}</Date>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </OverlayContent>
      </Overlay>
    </ImageWrapper>
  );
};
