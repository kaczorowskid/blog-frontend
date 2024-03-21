import { Outlet, useNavigate } from 'react-router-dom';
import logo from 'assets/logo.svg';
import { Footer, Header } from 'components';
import { routesUrls } from 'routes';
import { Conatiner } from './Main.styled';

export const Main = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <Header onClick={() => navigate(routesUrls.base)} image={logo} />
      <Conatiner>
        <Outlet />
      </Conatiner>
      <Footer info={`@ Damian Kaczorowski ${new Date().getFullYear()}`} />
    </>
  );
};
