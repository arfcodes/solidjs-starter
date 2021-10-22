/**
 * app/router
 */
import { lazy } from 'solid-js';
import { useRoutes } from 'solid-app-router';

const routes = [
  {
    path: '/',
    component: lazy(() => import('../../pages/Homepage')),
  },
  {
    path: '/about',
    component: lazy(() => import('../../pages/About')),
  },
  {
    path: '/contact',
    component: lazy(() => import('../../pages/Contact')),
  },
];

const Router = () => {
  const Routes = useRoutes(routes);
  return <Routes />;
};

export default Router;
