import { Tag } from 'components';
import { AnimatePresence } from 'framer-motion';
import { useAccessibility } from 'hooks';
import { formatDate } from 'utils';
import {
  Container,
  Date,
  Description,
  ExpandableContainer,
  ExpandableSection,
  Image,
  InfoContainer,
  Title
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

  const { onKeyDown } = useAccessibility(handleExpand);

  return (
    <section>
      <Container
        tabIndex={0}
        role='button'
        aria-label='Article item'
        isExpand={isExpand}
        onKeyDown={onKeyDown}
        onClick={handleExpand}
      >
        <AnimatePresence initial={false}>
          <ExpandableContainer {...container(isExpand)}>
            <InfoContainer>
              <Date>{formatDate(date)}</Date>
              <Title>{title}</Title>
              <Description>{description}</Description>
              <Tag isDark>{tag}</Tag>
            </InfoContainer>
            <Image src={thumbnail} alt={title} {...image(isExpand)} />
          </ExpandableContainer>
          <ExpandableSection {...section(isExpand)}>
            {isExpand && children}
          </ExpandableSection>
        </AnimatePresence>
      </Container>
    </section>
  );
};
