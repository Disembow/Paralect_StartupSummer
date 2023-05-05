import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="root__layout">
      <header>
        <nav className="navigation">
          <NavLink to="/" className={'navigation__item'}>
            Поиск Вакансий
          </NavLink>
          <NavLink to="favorites" className={'navigation__item'}>
            Избранное
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
