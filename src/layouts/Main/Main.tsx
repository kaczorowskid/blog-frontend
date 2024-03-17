import { Outlet, useNavigate } from 'react-router-dom';
import { Conatiner } from './Main.styled';
import { Footer, Header } from 'components';
import logo from 'assets/logo.svg';
import { routesUrls } from 'routes';

export const Main = () => {
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
