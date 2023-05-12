import React from 'react';
import styles from './UI.module.scss';
import classNames from 'classnames';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.logo__box}>
        <span className={classNames(styles.logo__item, styles.logo__item_left)}></span>
        <span className={classNames(styles.logo__item, styles.logo__item_right)}></span>
      </div>
      <h1 className={styles.logo__title}>Jobored</h1>
    </div>
  );
};

export default Logo;
