import React from 'react';
import styles from '../FavoritesPage.module.scss';
import emptyState from '../../../assets/balloon_empty_state.png';
import HomeButton from './HomeButton';

const EmptyLayout = () => {
  return (
    <div className={styles.empty_wrapper}>
      <img className={styles.image} src={emptyState} alt="тут еще ничего нет" />
      <h3 className={styles.title}>Упс, здесь еще ничего нет</h3>
      <HomeButton />
    </div>
  );
};

export default EmptyLayout;
