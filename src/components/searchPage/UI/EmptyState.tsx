import React from 'react';
import styles from './Card.module.scss';
import { Center } from '@mantine/core';

const EmptyState = () => {
  return (
    <Center>
      <h3 className={styles.title}>Упс, ничего не найдено</h3>
    </Center>
  );
};

export default EmptyState;
