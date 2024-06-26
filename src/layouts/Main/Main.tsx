import { Outlet } from 'react-router-dom';
import logo from 'assets/logo1.svg';
import { Footer, Header, ScrollToTop } from 'components';
import { routesUrls } from 'routes';
import { Conatiner } from './Main.styled';

export const Main = (): JSX.Element => (
  <>
    <Header navigateTo={routesUrls.base} image={logo} />
    <Conatiner>
      <ScrollToTop />
      <Outlet />
    </Conatiner>
    <Footer info={`@ Damian Kaczorowski ${new Date().getFullYear()}`} />
  </>
);
