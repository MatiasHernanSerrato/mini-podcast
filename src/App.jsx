import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';

export const Routes = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}><Outlet /></Suspense>
    </>
  );
};

export default Routes;
