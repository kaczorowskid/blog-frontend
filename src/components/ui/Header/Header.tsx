import { Link } from 'react-router-dom';
import { Container } from './Header.styled';
import { type HeaderProps } from './Header.types';

export const Header = ({ navigateTo, image }: HeaderProps): JSX.Element => {
  return (
    <Container>
      <Link to={navigateTo} aria-label='Logo'>
        <img src={image} />
      </Link>
    </Container>
  );
};
