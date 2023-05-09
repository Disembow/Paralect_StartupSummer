import React from 'react';
import styles from '../FavoritesPage.module.scss';
import emptyState from '../../../assets/balloon_empty_state.png';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router';

const EmptyLayout = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.empty_wrapper}>
      <img className={styles.image} src={emptyState} alt="тут еще ничего нет" />
      <h3 className={styles.title}>Упс, здесь еще ничего нет</h3>
      <Button className={styles.button} onClick={() => navigate('/')}>
        Поиск Вакансий
      </Button>
    </div>
  );
};

export default EmptyLayout;
