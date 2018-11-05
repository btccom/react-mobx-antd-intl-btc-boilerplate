import Demo from './Demo';
const routes = [
  {
    path: '/',
    name: 'demo',
    exact: true,
    component: Demo
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo
  }
];

export default routes;
