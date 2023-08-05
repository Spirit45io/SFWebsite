import * as React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MenuButton, Loader, MainMenu } from '@components';
import routes from '~react-pages';

const Routes = (): React.ReactElement | null => {
  console.log(routes);
  return useRoutes(routes);
};

export const App = (): JSX.Element => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: [
            'MontserratVariable',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        },
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#dc002c',
          },
          secondary: {
            main: '#f8520b',
          },
        },
        transitions: {
          duration: {
            standard: 950,
            enteringScreen: 950,
            leavingScreen: 950,
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<Loader />}>
        <BrowserRouter>
          <MenuButton />
          <MainMenu />
          <Routes />
        </BrowserRouter>
      </React.Suspense>
    </ThemeProvider>
  );
};
