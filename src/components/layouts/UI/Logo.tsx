import React from 'react';
import styles from './UI.module.scss';
import classNames from 'classnames';
import { useNavigate } from 'react-router';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.logo} onClick={() => navigate('/')}>
      <div className={styles.logo__box}>
        <span className={classNames(styles.logo__item, styles.logo__item_left)}></span>
        <span className={classNames(styles.logo__item, styles.logo__item_right)}></span>
      </div>
      <h1 className={styles.logo__title}>Jobored</h1>
    </div>
  );
};

export default Logo;
