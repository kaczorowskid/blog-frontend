import { Container } from './Header.styled';
import { HeaderProps } from './Header.types';

export const Header = ({ onClick, image }: HeaderProps) => {
  return (
    <Container>
      <img onClick={onClick} src={image} />
    </Container>
  );
};
