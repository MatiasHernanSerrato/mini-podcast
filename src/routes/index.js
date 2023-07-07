import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import Header from '../components/Header';

const Dashboard = lazy(() => import('../features/Dashboard'));

const routes = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/podcast/:podcastId',
    element: <>ContentDetail</>,
  }
];

export const AppRoutes = () => {
  const component = useRoutes([...routes]);

  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>{component}</Suspense>
    </div>
  );
};

export default AppRoutes;
