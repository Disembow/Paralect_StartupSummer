import React from 'react';
import style from './Filters.module.scss';
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
      className={style.filters__container}
    >
      <div className={style.filters__header}>
        <h4 className={style.filters__title}>Фильтры</h4>
        <div className={style.button__cross}>
          <p className={style.button__title}>Сбросить все</p>
          <CloseButton aria-label="Close modal" className={style.cross__item} />
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
      <Button type="submit" className={style.button__submit}>
        Применить
      </Button>
    </form>
  );
};

export default Filters;
