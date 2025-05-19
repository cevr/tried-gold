import './app.css';

import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';

import type { Route } from './+types/root';

export const links: Route.LinksFunction = () => [
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
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <body className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

function Header() {
  return (
    <header className="px-4 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-primary text-2xl font-semibold"
        >
          Tried Gold
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link
                to="/events"
                className="text-primary hover:underline"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-primary hover:underline"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-primary hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-primary hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="px-4 py-6 text-center text-sm text-gray-600">
      <div className="container mx-auto">
        © {new Date().getFullYear()} by Tried Gold Ministries.
      </div>
    </footer>
  );
}
