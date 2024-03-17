import { Main } from 'layouts';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { routesUrls } from './routesUrls';
import { ArticlePreview, ArticlesList } from 'views';

export const Routes = (): JSX.Element => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Main />}>
          <Route path={routesUrls.base} element={<ArticlesList />} />
          <Route path={routesUrls.article} element={<ArticlePreview />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
