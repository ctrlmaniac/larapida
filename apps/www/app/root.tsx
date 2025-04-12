import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  type MetaFunction,
  type LinksFunction,
} from 'react-router';
import { Box, Button, CssBaseline, CssVarsProvider, Sheet, Stack } from '@mui/joy';
import { IconMenu2 } from '@tabler/icons-react';

export const meta: MetaFunction = () => [
  {
    title: 'La Rapida Molinetto',
  },
  {
    name: 'apple-mobile-web-app-title',
    content: 'La Rapida'
  }
];

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: '/favicon-96x96.png',
    sizes: '96x96'
  },
  {
    rel: 'icon',
    type: 'image/svg+xml',
    href: '/favicon.svg'
  },
  { rel: 'shortcut icon', href: '/favicon.ico' },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/apple-touch-icon.png'
  },
  {
    rel: 'manifest',
    href: 'site.webmanifest'
  }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gridTemplateRows: "56px 1fr", gridColumnGap: "0px", gridRowGap: "0px", height: "100vh" }}>
          <Sheet variant='solid' sx={{ backgroundColor: "background.body" }}>
            <Stack direction="row"
              spacing={2}
              sx={{
                m: 1,
                justifyContent: "flex-start",
                alignItems: "center",
              }}>
              <Button variant='plain'><IconMenu2 /></Button>
            </Stack>
          </Sheet>

          <Box sx={{ overflowY: "auto" }}>
            {children}
            <ScrollRestoration />
          </Box>
        </Box>
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Outlet />
    </CssVarsProvider>);
}
