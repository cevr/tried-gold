import {
  index,
  prefix,
  route,
  type RouteConfig,
} from '@react-router/dev/routes';

export default [
  //
  index('routes/home.tsx'),
  route('/about', 'routes/about.tsx'),
  route('/contact', 'routes/contact.tsx'),
  route('/events', 'routes/events.tsx'),
  ...prefix('/blog', [
    index('routes/blog/index.tsx'),
    route('/:slug', 'routes/blog/post.tsx'),
  ]),
] satisfies RouteConfig;
