import React, { FC, useState } from 'react';
import styles from './Filters.module.scss';
import { Button } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { TFilters, setSearchValue } from '../../../app/slices/cardsSlice';
import FilterHeader from './FilterHeader';
import FilterSelect from './FilterSelect';
import FilterInput from './FilterInput';

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
      marginBottom: '0.42rem',
    },
  };

  const placeholderStyle = {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: '150%',
    margin: '0 0 0.5rem 0',
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
        onChange={selectChangeHandler}
        labelProps={labelProps}
        data={industries}
        defaultValue={select.toString()}
        value={params.select.toString()}
        placeholderStyle={placeholderStyle}
      />

      <FilterInput
        dataElem="salary-from-input"
        label="Оклад"
        labelProps={labelProps}
        placeholder="От"
        defaultValue={salaryFrom}
        value={params.salaryFrom}
        placeholderStyle={placeholderStyle}
        marginBottom="0.5rem"
        onChange={(e: number | '') => {
          setParams({
            ...params,
            ...{ salaryFrom: e !== '' ? Number(e) : '' },
          });
        }}
      />

      <FilterInput
        dataElem="salary-to-input"
        labelProps={labelProps}
        placeholder="До"
        defaultValue={salaryTo}
        value={params.salaryTo}
        placeholderStyle={placeholderStyle}
        marginBottom="1.25rem"
        onChange={(e: number | '') => {
          setParams({
            ...params,
            ...{ salaryTo: e !== '' ? Number(e) : '' },
          });
        }}
      />

      <Button type="submit" className={styles.button__submit} data-elem="search-button">
        Применить
      </Button>
    </form>
  );
};

export default Filters;
