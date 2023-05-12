import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from './UI/Logo';
import NavigationBar from './UI/NavigationBar';
import './RootLayout.scss';

export default function RootLayout() {
  return (
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
  );
}
