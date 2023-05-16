import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Logo from './UI/Logo';
import NavigationBar from './UI/NavigationBar';
import './RootLayout.scss';
import Overlay from './UI/Overlay';
import { fetchAuth } from '../../app/slices/authSlice';
import { getURLString } from '../../app/api';
import { useAppDispatch } from '../../app/hooks';
import { getAuthData, removeAuthData } from '../../app/localStorage';

export default function RootLayout() {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authData = getAuthData();

    if (!authData) {
      dispatch(fetchAuth([getURLString('auth')]));
    } else {
      const { ttl } = authData;
      const currentDate = Math.floor(Date.now() / 1000);
      if (currentDate >= ttl) {
        removeAuthData();
        dispatch(fetchAuth([getURLString('auth')]));
      }
    }
  }, [dispatch]);

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
