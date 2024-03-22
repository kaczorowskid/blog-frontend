import { Tag } from 'components';
import { useArticle } from 'hooks';
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
  const { _id: id, date, description, thumbnail, title, tag } = data ?? {};

  const { handleGoToArticle } = useArticle(id);

  return (
    <ImageWrapper>
      <Image src={thumbnail} />
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
