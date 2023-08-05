import routes from '~react-pages';
import { type sp45_RouteObject } from '@typings';

export const getSortedRoutes = (): sp45_RouteObject[] => {
  // const homeIndex = routes.findIndex((route) => route.path === '/'); // get Home index in array
  // [routes[0], routes[homeIndex]] = [routes[homeIndex], routes[0]];

  return routes;
};
