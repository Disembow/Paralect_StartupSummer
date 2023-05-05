import React from 'react';
import './UI.scss';

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__box">
        <span className="logo__item logo__item_left"></span>
        <span className="logo__item logo__item_right"></span>
      </div>
      <h1 className="logo__title">Jobored</h1>
    </div>
  );
};

export default Logo;
