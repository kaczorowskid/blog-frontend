import { Container } from './Tag.styled';
import { TagProps } from './Tag.types';

export const Tag = ({ isDark = false, children }: TagProps) => {
  return <Container isDark={isDark}>{`# ${children}`}</Container>;
};
