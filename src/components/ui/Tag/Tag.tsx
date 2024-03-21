import { Container } from './Tag.styled';
import { TagProps } from './Tag.types';

export const Tag = ({ isDark = false, children }: TagProps): JSX.Element => {
  return <Container isDark={isDark}>{`# ${children}`}</Container>;
};
