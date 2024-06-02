import Header from '@components/header';
import Footer from '@components/footer';
import { Outlet } from 'react-router-dom';
import ThemeSwapper from '@src/libs/components/themeSwapper';

export const Root = () => {
  return (
    <>
      <Header />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
      <div className="sticky bottom-0 right-4 w-full flex justify-end">
        <ThemeSwapper />
      </div>
    </>
  );
};
