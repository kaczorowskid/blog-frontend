import { Tag } from 'components';
import { AnimatePresence } from 'framer-motion';
import { formatDate } from 'utils';
import {
  Date,
  Description,
  ExpandableContainer,
  ExpandableSection,
  Image,
  InfoContainer,
  Title,
  Wrapper
} from './BlogArticleItem.styled';
import { type BlogArticleItemProps } from './BlogArticleItem.types';
import { container, image, section } from './animation.variants';

export const BlogArticleItem = ({
  item: { date, description, _id: id, thumbnail, title, tag },
  articleId,
  setArticleId,
  children
}: BlogArticleItemProps): JSX.Element => {
  const isExpand = articleId === id;

  const handleExpand = (): void => {
    !isExpand && setArticleId(id);
  };

  return (
    <Wrapper isExpand={isExpand} onClick={handleExpand}>
      <AnimatePresence initial={false}>
        <ExpandableContainer {...container(isExpand)}>
          <InfoContainer>
            <Date>{formatDate(date)}</Date>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Tag isDark>{tag}</Tag>
          </InfoContainer>
          <Image src={thumbnail} {...image(isExpand)} />
        </ExpandableContainer>
        <ExpandableSection {...section(isExpand)}>
          {isExpand && children}
        </ExpandableSection>
      </AnimatePresence>
    </Wrapper>
  );
};
