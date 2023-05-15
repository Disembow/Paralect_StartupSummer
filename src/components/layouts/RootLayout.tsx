import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Logo from './UI/Logo';
import NavigationBar from './UI/NavigationBar';
import './RootLayout.scss';
import Overlay from './UI/Overlay';

export default function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Overlay />
      <div className="root__layout">
        <header className="header">
          <div className="header__wrapper">
            <Logo />
            <NavigationBar />
            <span className="empty"></span>
          </div>
        </header>
        <main className="main">
          <Outlet />
        </main>
      </div>
    </>
  );
}
