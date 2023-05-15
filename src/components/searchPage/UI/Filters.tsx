import React, { FC } from 'react';
import styles from './Filters.module.scss';
import { Select, CloseButton, NumberInput, Button } from '@mantine/core';
import { IconChevronDown, IconSelector } from '@tabler/icons-react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setSearchValue } from '../../../app/slices/cardsSlice';

interface IFilter {
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Filters: FC<IFilter> = ({ submitHandler }) => {
  const dispatch = useAppDispatch();
  const searchParams = useAppSelector((state) => state.cards.searchParams);
  const industries = useAppSelector((state) => state.industries.industries).map((e) => {
    return {
      value: e.key.toString(),
      label: e.title_rus,
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

  const CustomIconSelector = () => {
    return <IconSelector strokeWidth="1.25" color="#ACADB9" />;
  };

  return (
    <form
      // onSubmit={(e) => {
      //   e.preventDefault();
      // }}
      onSubmit={(e) => submitHandler(e)}
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
          dispatch(
            setSearchValue({
              ...searchParams,
              ...{ select: e },
            })
          )
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
        rightSection={<CustomIconSelector />}
        styles={{
          rightSection: { pointerEvents: 'none' },
          input: {
            '::placeholder': placeholderStyle,
          },
        }}
        onChange={(e) =>
          dispatch(
            setSearchValue({
              ...searchParams,
              ...{ salaryFrom: e },
            })
          )
        }
      />
      <NumberInput
        placeholder="До"
        step={100}
        min={0}
        size="md"
        mb={'18px'}
        radius={8}
        rightSection={<CustomIconSelector />}
        styles={{
          rightSection: { pointerEvents: 'none' },
          input: {
            '::placeholder': placeholderStyle,
          },
        }}
        onChange={(e) =>
          dispatch(
            setSearchValue({
              ...searchParams,
              ...{ salaryTo: e },
            })
          )
        }
      />
      <Button type="submit" className={styles.button__submit}>
        Применить
      </Button>
    </form>
  );
};

export default Filters;
