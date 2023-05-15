import React, { useState } from 'react';
import styles from './Filters.module.scss';
import { Select, CloseButton, NumberInput, Button } from '@mantine/core';
import { IconChevronDown, IconSelector } from '@tabler/icons-react';
import { useAppSelector } from '../../../app/hooks';

type TFilters = {
  select: string;
  salaryFrom: number;
  salaryTo: number;
};

const initialValue: TFilters = {
  select: '',
  salaryFrom: 0,
  salaryTo: 0,
};

const Filters = () => {
  const [value, setValue] = useState<TFilters>(initialValue);

  const industries = useAppSelector((state) => state.industries.industries).map((e) => {
    return {
      value: e.title_rus,
      label: e.title_rus,
      key: e.key,
    };
  });

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
    return <IconSelector strokeWidth="1.25" color="#ACADB9" />;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(value);
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
        onChange={(e) =>
          setValue({
            ...value,
            ...{ select: e ? e : '' },
          })
        }
        label="Отрасль"
        labelProps={labelProps}
        placeholder="Выберете отрасль"
        rightSection={<IconChevronDown size="1.5rem" color="#ACADB9" />}
        styles={{
          rightSection: { pointerEvents: 'none' },
          input: {
            '::placeholder': placeholderStyle,
          },
          dropdown: {
            borderRadius: '0.5rem',
            '[data-hovered]': {
              backgroundColor: '#DEECFF',
            },
            '[data-selected]': {
              backgroundColor: '#5E96FC',
            },
          },
        }}
        data={industries}
        transitionProps={{ transition: 'pop-top-left', duration: 100, timingFunction: 'ease' }}
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
        onChange={(e) =>
          setValue({
            ...value,
            ...{ salaryFrom: e === '' ? 0 : e },
          })
        }
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
        onChange={(e) =>
          setValue({
            ...value,
            ...{ salaryTo: e === '' ? 0 : e },
          })
        }
      />
      <Button type="submit" className={styles.button__submit}>
        Применить
      </Button>
    </form>
  );
};

export default Filters;
