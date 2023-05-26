import React from 'react';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router';
import styles from '../FavoritesPage.module.scss';

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <Button className={styles.button} onClick={() => navigate('/')}>
      Поиск Вакансий
    </Button>
  );
};

export default HomeButton;
