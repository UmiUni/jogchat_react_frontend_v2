/* @flow */

import App from './App';
import Loadable from 'react-loadable';

const loadComponent = (fn: () => Promise<Object>): any =>
  Loadable({
    loader: fn,
    loading: (): any => null,
  });

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: loadComponent(
          (): Promise<Object> => import('components/Home')
        ),
      },
      {
        path: '/home',
        component: loadComponent(
          (): Promise<Object> => import('components/Home')
        ),
      },
      {
        path: '/facebook',
        component: loadComponent(
          (): Promise<Object> => import('components/Facebook')
        ),
      },
      {
        path: '/partners',
        component: loadComponent(
          (): Promise<Object> => import('components/Partners')
        ),
      },
    ],
  },
];

export default routes;
