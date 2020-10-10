import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = React.lazy(() => import('../views/Home'));
const About = React.lazy(() => import('../views/About'));

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/index',
    exact: true,
    render: () => {
      return <Redirect to={ "/" }></Redirect>
    }
  },
  {
    path: '/about',
    exact: true,
    component: About
  }
]

export default routes;