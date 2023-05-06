import React from 'react';
import styles from './Filters.module.scss';
import { Select, CloseButton, NumberInput, Button } from '@mantine/core';

const Filters = () => {
  const labelProps = {
    style: {
      fontWeight: 700,
    },
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={styles.filters__container}
    >
      <div className={styles.filters__header}>
        <h4 className={styles.filters__title}>Фильтры</h4>
        <div className={styles.button__cross}>
          <p className={styles.button__title}>Сбросить все</p>
          <CloseButton aria-label="Cleare all filters" className={styles.cross__item} />
        </div>
      </div>
      <Select
        label="Отрасль"
        labelProps={labelProps}
        placeholder="Выберете отрасль"
        data={[
          { value: 'test1', label: 'Test1' },
          { value: 'test2', label: 'Test2' },
          { value: 'test3', label: 'Test3' },
          { value: 'test4', label: 'Test4' },
        ]}
        transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
        withinPortal
        mb={'8px'}
        size="md"
      />
      <NumberInput
        placeholder="от"
        step={100}
        min={0}
        size="md"
        labelProps={labelProps}
        mb={'8px'}
        label="Оклад"
      />
      <NumberInput placeholder="до" step={100} min={0} size="md" mb={'20px'} />
      <Button type="submit" className={styles.button__submit}>
        Применить
      </Button>
    </form>
  );
};

export default Filters;
