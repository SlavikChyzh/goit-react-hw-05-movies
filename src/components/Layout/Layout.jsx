import { NavigationBar } from 'components/Navigation/NavigationBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export { Layout };
