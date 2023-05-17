import React from 'react';
import { Center } from '@mantine/core';
import styles from './NotFoundPage.module.scss';
import HomeButton from '../favoritesPage/UI/HomeButton';

const NotFoundPage = () => {
  return (
    <>
      <Center>
        <h1 className={styles.title}>Упс, этой страницы не существует</h1>;
      </Center>
      <Center>
        <HomeButton />
      </Center>
    </>
  );
};

export default NotFoundPage;
