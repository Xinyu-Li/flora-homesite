import { Outlet } from 'react-router';
import MainLayout from '@/components/layout/MainLayout';
import { ensureAntdCompat } from '@/lib/antdCompat';

ensureAntdCompat();

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default App;
