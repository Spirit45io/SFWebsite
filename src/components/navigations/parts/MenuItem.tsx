import { isPathIncluded } from '@libs/isPathIncluded';
import { Link as RouterLink } from 'react-router-dom';
import { MenuList, MenuItem as Item, Link } from '@mui/material';
import { capitalize } from 'lodash';
import { type sp45_RouteObject } from '@typings';

interface MenuItemProps {
  routes: sp45_RouteObject[];
  checkers: string[];
  isExcluded?: boolean;
  useChildren?: boolean;
  colors?: string;
  useAnchor?: boolean;
  customRoutes?: string[];
}

const customRoutes = (
  routes: sp45_RouteObject[],
  customRoutes: string[] | undefined
): sp45_RouteObject[] => {
  if (customRoutes !== undefined && customRoutes.length > 0)
    return customRoutes.map((route) => {
      return {
        path: `/${route}`,
        name: route,
      };
    });
  return routes;
};

const getMenuItems = (params: MenuItemProps): React.ReactNode => {
  return customRoutes(params.routes, params.customRoutes).map((route) => {
    if (
      route.name !== undefined &&
      isPathIncluded(route.path, params.checkers, params.isExcluded).length ===
        0
    ) {

      const path =
        route.name.toLowerCase() !== 'home'
          ? `/${route.name.toLowerCase()}`
          : '/';
      return (
        <Link
          component={RouterLink}
          replace
          to={
            params.useAnchor === true
              ? {
                  pathname: '/',
                  hash:
                    route.name.toLowerCase() !== 'home'
                      ? `#${route.name.toLowerCase()}`
                      : undefined,
                }
              : path
          }
          key={`route-to-${route.name}`}
          sx={{
            textDecoration: 'none',
          }}
          color={params.colors}
        >
          <Item
            sx={{
              display: 'flex',
              justifyContent: 'center',
              fontWeight: 500,
              letterSpacing: '0.1rem',
            }}
          >
            {capitalize(route.name)}
          </Item>
        </Link>
      );
    }
    return null;
  });
};

export const MenuItem = (props: MenuItemProps): JSX.Element => {
  const { isExcluded = false, useChildren = false, ...attr } = props;
  return (
    <MenuList
      sx={{
        width: '100%',
      }}
    >
      {getMenuItems({
        routes: attr.routes,
        isExcluded,
        useChildren,
        checkers: attr.checkers,
        colors: attr.colors,
        useAnchor: attr.useAnchor,
        customRoutes: attr.customRoutes,
      })}
    </MenuList>
  );
};
