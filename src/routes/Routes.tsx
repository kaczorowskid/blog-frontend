import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { Error, Main } from 'layouts';
import { ArticlePreview, ArticlesList, Error404 } from 'views';
import { routesUrls } from './routesUrls';

export const Routes = (): JSX.Element => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Main />}>
          <Route path={routesUrls.base} element={<ArticlesList />} />
          <Route path={routesUrls.article} element={<ArticlePreview />} />
        </Route>
        <Route element={<Error />}>
          <Route path='*' element={<Error404 />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
