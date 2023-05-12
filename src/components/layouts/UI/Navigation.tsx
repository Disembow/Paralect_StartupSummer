import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

type TNav = {
  callback?: () => void;
};

const Navigation: FC<TNav> = ({ callback }) => {
  return (
    <>
      <NavLink to="/" className="navigation__item" onClick={callback}>
        Поиск Вакансий
      </NavLink>
      <NavLink to="favorites" className="navigation__item" onClick={callback}>
        Избранное
      </NavLink>
    </>
  );
};

export default Navigation;
