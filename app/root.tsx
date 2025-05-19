import './app.css';

import { MenuIcon, XIcon } from 'lucide-react';
import React from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="px-4 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-primary flex items-center gap-2 font-serif text-2xl"
        >
          <Logo />
          Tried Gold
        </Link>

        {/* Hamburger button for mobile */}
        <button
          className="p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className="group flex size-6 flex-col gap-1"
            data-open={isMenuOpen ? '' : undefined}
          >
            <MenuIcon className="size-6 group-data-open:hidden" />
            <XIcon className="hidden size-6 group-data-open:block" />
          </div>
        </button>

        {/* Navigation menu */}
        <nav
          className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-20 right-0 left-0 bg-white p-4 shadow-lg md:relative md:top-0 md:right-auto md:left-auto md:block md:bg-transparent md:p-0 md:shadow-none`}
        >
          <ul className="flex flex-col gap-4 md:flex-row md:gap-6">
            <li>
              <Link
                to="/events"
                className="text-primary block py-2 hover:underline md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-primary block py-2 hover:underline md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-primary block py-2 hover:underline md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-primary block py-2 hover:underline md:py-0"
                onClick={() => setIsMenuOpen(false)}
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

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      className="size-8"
    >
      <path d="M475.5 26.6c-74.6 6-154.4 32.4-219 72.3-33.5 20.6-61 42.7-89.7 71.7-17.8 18.1-27.4 29.2-42.3 48.9C71 290.6 40.4 366.9 29.9 455.4c-2.6 22-3.6 66.8-2 89.1C36.1 656.9 79 756.8 155.8 842.4 205 897.2 283.4 948.2 357 973.2c49.2 16.7 92.9 24.3 145.5 25.5 79.8 1.7 152-14.3 224-49.7 68-33.4 122.8-78.3 166.7-136.6 42.7-56.8 72.7-118.3 88.3-181.5 10.6-43 14.5-75.1 14.5-120.1 0-76.5-15.3-143.7-47.9-211.3-51.4-106.3-136.8-187.3-246.4-233.8C655 45.9 614.2 35.1 561 28.4c-12-1.5-73-2.8-85.5-1.8zM541 66.5c58.3 4.7 112 19.5 164 45.1 90.6 44.5 155.8 109.2 201.2 199.9 31.2 62 46.2 121.2 47.5 187.5 2.1 105-29.3 202.2-92.8 287.3-29.8 39.9-62.8 70.7-106.1 99.1-27.1 17.8-51.8 30.5-81.6 42-72.1 27.9-146.5 37-220.7 27.1-39.6-5.4-80.4-17-120.1-34.3-78.1-34.2-148.5-95.9-196.6-172.5-11.1-17.7-28.5-52.3-36.6-72.8-20.4-51.8-30.7-102.8-31.7-157.4-.4-23.3.4-37.6 3.5-60 14.7-107.4 65.6-204.6 143.6-274.6 50-44.9 99.5-73.6 163.4-94.9 55.9-18.7 110.3-25.9 163-21.5z" />
      <path d="M471.4 92.6c.4.9 1.4 6 2.2 11.3 2 12.2 1.4 32.9-1.6 49.1-7.5 41.3-22.6 69.9-62.2 117.4-17.7 21.2-34.1 38.8-69.3 74.6-16 16.2-32.4 33.3-36.6 38-55.3 62.3-87.3 128.5-95.4 197.5-2 17.2-2 52 0 69 8 67.7 35.4 127.5 79.8 174.1 55.3 58 128.7 89.8 214.7 93.1 67.1 2.5 139.9-20.9 195.8-62.9C751.7 814 793.6 750 809.1 685.4c5.9-24.8 7.3-36.1 7.3-58.9 0-23-1.4-35.7-6.3-57.5-10.7-46.5-30.2-84.6-67.6-132-17.8-22.5-25.9-34.5-31.9-47-9.3-19.5-12.6-38.3-10.7-61.1.6-7.3 1.5-15.1 2-17.2.6-2.6.6-3.7-.3-3.7-.6 0-5.6 3-11.1 6.6-32.9 21.5-50.3 45.6-57 78.7-5.1 25.3-3.8 54.2 4.1 93.6 1.3 6.8 2.3 12.5 2.1 12.8-.6.6-13.1-13.2-18.8-20.6-6.7-9-12.4-20.2-15-29.6-1.9-7-2.1-9.6-1.6-21.5.6-14.3 1.4-18.8 10.5-56.5 6.8-28.2 8.9-39.5 10.1-55.5 2.8-35.5-4.8-70.4-22.6-104-26.2-49.4-75.8-97-122.3-117.4-9.3-4.1-9.4-4.2-8.6-2zm50.4 90.6c22.4 23.8 38 54.2 43.8 85.3 1.5 7.9 1.9 14.8 1.9 33 0 28.1-1.1 35.8-10.1 71.2-8.9 35.3-9.7 41-9.1 60.7.3 12.1 1 18.1 2.6 24.1 2.7 10.3 11.5 28.1 18.1 37 2.9 3.8 16.2 17.8 29.5 31 26.1 25.9 33.4 34.9 42.4 52.3 11.2 22 16.2 46.1 17.4 83.5l.2 7.8 8.1-11.3c19-26.4 27.7-47.3 30.4-72.8 1.8-16.5-.7-33-9.4-62-5.3-17.5-8-29.7-10-45-1.6-12-3.2-38-2.3-38 .2 0 3.3 3.5 6.8 7.7 3.5 4.3 8.9 10.7 11.9 14.3 46 53.3 69 107.1 69 161.5-.1 59.8-30.4 126.6-78.1 171.9-35.2 33.5-87 60.1-130.7 67.1-5.3.9-10.5 1.8-11.5 2-.9.2-1.5-.1-1.1-.6.3-.5 1-.9 1.5-.9 2.8 0 20.6-13.7 30.4-23.5 22.4-22.1 42.1-53.3 51.6-81.5 16.5-49.3 13.3-99.4-9.1-145.2-10-20.2-22.3-36.8-44.4-59.6-18.1-18.7-24-25.7-31.9-37.7-20.9-31.9-29-68.7-25.8-117.7 1-16.4 3-35.2 5.6-52.8l.7-4.5-3.9 4.1c-2.1 2.2-7.8 9-12.8 15-16.6 20.2-25.6 29.8-55.9 59.9-29.7 29.5-43.3 44.6-59.4 65.7-29.2 38.5-49.3 78.9-58.6 117.8-4.6 19.5-5.1 24.6-5.1 54 .1 27.1.2 29.1 2.8 41.1 11.9 56.1 41.5 92.1 87.7 106.7 9.8 3.1 23.9 5.6 28 5 2-.3 1.6-.8-3.6-5-19.4-15.2-38.4-40.1-47-61.2-8.7-21.5-11.8-37.9-11.8-63.1 0-19.9 1.4-31.1 6.7-53.5l2.2-9.5 4.3 13.3c10 30.8 22.5 49 50.4 73.4 19.9 17.3 30.6 30.9 42.8 54.3 2.9 5.5 5.5 10.1 5.9 10.3.4.1 3.5-5.5 6.8-12.5 15.4-32.2 17-57.1 5.3-84.4-4.5-10.5-10-19.3-25.5-40-24.7-32.9-33.9-48.4-38.5-64.9-6.5-23.4-2.1-42.8 15.7-69.5 6.5-9.8 8.2-12 8.6-11.4.2.2 1.6 4.4 3.1 9.4 8.2 26.6 24.6 51.9 52.5 81 39 40.6 55 72.7 56.8 114.1 2 47.8-16.5 94.1-50.8 126.9-23.6 22.5-50.8 32.8-82.7 31.2-6.4-.3-15.3-1.3-19.7-2.2-52.7-10.8-107-55.4-136.9-112.6-31.2-59.8-36.7-127.5-15.5-191.1C284 507.1 302 475 329.5 440.5c11.3-14.2 27.8-31.8 68.1-72.5 47.1-47.5 61.6-64.3 81.9-94.5 21-31.4 34-63.2 36.2-88.8.3-3.7.7-6.7.9-6.7.2 0 2.5 2.4 5.2 5.2z" />
    </svg>
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
