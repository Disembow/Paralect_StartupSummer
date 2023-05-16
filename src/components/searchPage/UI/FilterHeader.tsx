import React, { FC } from 'react';
import styles from './Filters.module.scss';
import { CloseButton } from '@mantine/core';

interface IFilterHeader {
  clickHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const FilterHeader: FC<IFilterHeader> = ({ clickHandler }) => {
  return (
    <div className={styles.filters__header}>
      <h4 className={styles.filters__title}>Фильтры</h4>
      <div className={styles.button__cross} onClick={(e) => clickHandler(e)}>
        <p className={styles.button__title}>Сбросить все</p>
        <CloseButton aria-label="Cleare all filters" iconSize={13} className={styles.cross__item} />
      </div>
    </div>
  );
};

export default FilterHeader;
