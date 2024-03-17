import { Outlet } from 'react-router-dom';
import { Container } from './Error.styled';

export const Error = (): JSX.Element => (
  <Container>
    <Outlet />
  </Container>
);
