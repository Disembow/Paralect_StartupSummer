import React from 'react';
import styles from './Filters.module.scss';
import { Select, CloseButton, NumberInput, Button } from '@mantine/core';
import { IconChevronDown, IconSelector } from '@tabler/icons-react';

const Filters = () => {
  const labelProps = {
    style: {
      fontWeight: 700,
      fontFamily: 'Inter',
      marginBottom: '0.45rem',
    },
  };

  const placeholderStyle = {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: '150%',
  };

  const CustonIconSelector = () => {
    return <IconSelector stroke-width="1.25" color="#ACADB9" />;
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
          <CloseButton
            aria-label="Cleare all filters"
            iconSize={13}
            className={styles.cross__item}
          />
        </div>
      </div>
      <Select
        label="Отрасль"
        labelProps={labelProps}
        placeholder="Выберете отрасль"
        rightSection={<IconChevronDown size="1.5rem" color="#ACADB9" />}
        styles={{
          rightSection: { pointerEvents: 'none' },
          input: {
            '::placeholder': placeholderStyle,
          },
        }}
        data={[
          { value: 'test1', label: 'Test1' },
          { value: 'test2', label: 'Test2' },
          { value: 'test3', label: 'Test3' },
          { value: 'test4', label: 'Test4' },
        ]}
        transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
        withinPortal
        mb={'16px'}
        size="md"
        radius={8}
      />
      <NumberInput
        placeholder="От"
        step={100}
        min={0}
        size="md"
        labelProps={labelProps}
        mb={'8px'}
        label="Оклад"
        radius={8}
        rightSection={<CustonIconSelector />}
        styles={{
          rightSection: { pointerEvents: 'none' },
          input: {
            '::placeholder': placeholderStyle,
          },
        }}
      />
      <NumberInput
        placeholder="До"
        step={100}
        min={0}
        size="md"
        mb={'18px'}
        radius={8}
        rightSection={<CustonIconSelector />}
        styles={{
          rightSection: { pointerEvents: 'none' },
          input: {
            '::placeholder': placeholderStyle,
          },
        }}
      />
      <Button type="submit" className={styles.button__submit}>
        Применить
      </Button>
    </form>
  );
};

export default Filters;
