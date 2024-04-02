import { Container } from './Header.styled';
import { type HeaderProps } from './Header.types';

export const Header = ({ onClick, image }: HeaderProps): JSX.Element => {
  return (
    <Container>
      <h1>blog</h1>
      <img onClick={onClick} src={image} />
    </Container>
  );
};
