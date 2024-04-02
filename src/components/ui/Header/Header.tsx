import { Container, StyledLink } from './Header.styled';
import { type HeaderProps } from './Header.types';

export const Header = ({ navigateTo, image }: HeaderProps): JSX.Element => {
  return (
    <Container>
      <StyledLink to={navigateTo} aria-label='Logo'>
        <img src={image} alt='logo' />
      </StyledLink>
    </Container>
  );
};
