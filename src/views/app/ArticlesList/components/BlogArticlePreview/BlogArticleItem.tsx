import {
  Date,
  Description,
  ExpandableContainer,
  ExpandableSection,
  Image,
  Title,
  Wrapper
} from './BlogArticleItem.styled';
import { AnimatePresence } from 'framer-motion';
import {
  expandableContainerVariant,
  expandableSectionVariants,
  imageVariant,
  transition
} from './animation.variants';
import { BlogArticleItemProps } from './BlogArticleItem.types';
import { Tag } from 'components';
import { formatDate } from 'utils';

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
    <Wrapper key={id} onClick={handleExpand}>
      <AnimatePresence initial={false}>
        <ExpandableContainer
          variants={expandableContainerVariant}
          transition={transition}
          initial='open'
          animate={isExpand ? 'close' : 'open'}
        >
          <div>
            <Date>{formatDate(date)}</Date>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Tag isDark>{tag}</Tag>
          </div>
          <Image
            src={thumbnail}
            initial='open'
            animate={isExpand ? 'close' : 'open'}
            variants={imageVariant}
            transition={transition}
          />
        </ExpandableContainer>
      </AnimatePresence>
      <AnimatePresence initial={false}>
        <ExpandableSection
          variants={expandableSectionVariants}
          transition={transition}
          initial='close'
          animate={isExpand ? 'open' : 'close'}
        >
          {children}
        </ExpandableSection>
      </AnimatePresence>
    </Wrapper>
  );
};
