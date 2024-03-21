import { Tag } from 'components';
import { AnimatePresence } from 'framer-motion';
import { formatDate } from 'utils';
import {
  Date,
  Description,
  ExpandableContainer,
  ExpandableSection,
  Image,
  Title,
  Wrapper
} from './BlogArticleItem.styled';
import { BlogArticleItemProps } from './BlogArticleItem.types';
import { container, image, section } from './animation.variants';

export const BlogArticleItem = ({
  item: { date, description, _id: id, thumbnail, title, tag },
  articleId,
  setArticleId,
  children
}: BlogArticleItemProps) => {
  const isExpand = articleId === id;

  const handleExpand = () => {
    !isExpand && setArticleId(id);
  };

  return (
    <Wrapper key={id} isExpand={isExpand} onClick={handleExpand}>
      <AnimatePresence initial={false}>
        <ExpandableContainer {...container(isExpand)}>
          <div>
            <Date>{formatDate(date)}</Date>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Tag isDark>{tag}</Tag>
          </div>
          <Image src={thumbnail} {...image(isExpand)} />
        </ExpandableContainer>
        <ExpandableSection {...section(isExpand)}>
          {isExpand && children}
        </ExpandableSection>
      </AnimatePresence>
    </Wrapper>
  );
};
