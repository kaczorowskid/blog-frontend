import { useNavigate } from 'react-router-dom';
import { Tag } from 'components';
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
import { LatestArticleProps } from './LatestAtricle.types';

export const LatestArticle = ({ data }: LatestArticleProps): JSX.Element => {
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
