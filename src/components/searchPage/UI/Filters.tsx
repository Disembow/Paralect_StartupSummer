import React, { FC, useState } from 'react';
import styles from './Filters.module.scss';
import { NumberInput, Button } from '@mantine/core';
import { IconSelector } from '@tabler/icons-react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { TFilters, setSearchValue } from '../../../app/slices/cardsSlice';
import FilterHeader from './FilterHeader';
import FilterSelect from './FilterSelect';

const Filters: FC = () => {
  const dispatch = useAppDispatch();
  const industries = useAppSelector((state) => state.industries.industries).map((e) => {
    return {
      value: e.key.toString(),
      label: e.title_rus,
    };
  });
  const { keyword, salaryFrom, salaryTo, select, page } = useAppSelector(
    (state) => state.cards.searchParams
  );

  const [params, setParams] = useState<Omit<TFilters, 'keyword'>>({
    select: select,
    salaryFrom: salaryFrom,
    salaryTo: salaryTo,
    page: page,
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

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchValue({ ...params, keyword, page: 1 }));
  };

  const clearAllFilters = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(
      setSearchValue({ ...params, select: '', salaryFrom: '', salaryTo: '', keyword, page: 1 })
    );
    setParams({ select: 0, salaryFrom: '', salaryTo: '', page: 1 });
  };

  const selectChangeHandler = (e: string | null) => {
    setParams({
      ...params,
      ...{ select: e ? Number(e) : 0 },
    });
  };

  return (
    <form onSubmit={(e) => submitHandler(e)} className={styles.filters__container}>
      <FilterHeader clickHandler={clearAllFilters} />
      <FilterSelect
        onChange={(e) => selectChangeHandler(e)}
        labelProps={labelProps}
        data={industries}
        defaultValue={select.toString()}
        value={params.select.toString()}
        placeholderStyle={placeholderStyle}
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
        defaultValue={salaryFrom}
        value={params.salaryFrom}
        styles={{
          rightSection: { pointerEvents: 'none' },
          input: {
            '::placeholder': placeholderStyle,
          },
        }}
        onChange={(e) => {
          setParams({
            ...params,
            ...{ salaryFrom: e !== '' ? Number(e) : '' },
          });
        }}
      />
      <NumberInput
        placeholder="До"
        step={100}
        min={0}
        size="md"
        mb={'18px'}
        radius={8}
        rightSection={<CustomIconSelector />}
        defaultValue={salaryTo}
        value={params.salaryTo}
        styles={{
          rightSection: { pointerEvents: 'none' },
          input: {
            '::placeholder': placeholderStyle,
          },
        }}
        onChange={(e) => {
          setParams({
            ...params,
            ...{ salaryTo: e !== '' ? Number(e) : '' },
          });
        }}
      />
      <Button type="submit" className={styles.button__submit}>
        Применить
      </Button>
    </form>
  );
};

export default Filters;
