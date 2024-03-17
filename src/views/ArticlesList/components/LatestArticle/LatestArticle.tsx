import {
  Date,
  Description,
  Image,
  ImageWrapper,
  Overlay,
  OverlayContent,
  Title
} from './LatestArticle.styled';
import { Tag } from 'components';
import { LatestArticleProps } from './LatestAtricle.types';
import { useNavigate } from 'react-router-dom';
import { formatDate } from 'utils';

export const LatestArticle = ({ data }: LatestArticleProps) => {
  const { _id: id, date, description, thumbnail, title, tag } = data ?? {};

  const navigate = useNavigate();

  return (
    <ImageWrapper>
      <Image src={thumbnail} />
      <Overlay onClick={() => navigate(`article/${id}`)}>
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
