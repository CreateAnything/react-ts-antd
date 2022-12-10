import React from "react";
import {Navigate, RouteObject} from "react-router-dom";
const Home = React.lazy(() => import("@/views/home"));
const About = React.lazy(() => import("@/views/about"));

const withLoadingComponent = (component: React.ReactNode) => (
  <React.Suspense fallback={<div>...loading</div>}>{component}</React.Suspense>
);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to='/home' />,
  },
  {
    path: "/home",
    element: withLoadingComponent(<Home />),
  },
  {
    path: "/about",
    element: withLoadingComponent(<About />),
  },
];

export default routes;
