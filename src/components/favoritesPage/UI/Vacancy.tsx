import React from 'react';
import { useParams } from 'react-router';
import styles from './Vacancy.module.scss';

const Vacancy = () => {
  const { id } = useParams();

  return <div className={styles.wrapper}>{id}</div>;
};

export default Vacancy;
