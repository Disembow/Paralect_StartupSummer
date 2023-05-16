import React, { useState } from 'react';
import { Button, Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import styles from './SearchBar.module.scss';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setSearchValue } from '../../../app/slices/cardsSlice';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const searchParams = useAppSelector((state) => state.cards.searchParams);

  const clickHandler = () => {
    dispatch(setSearchValue({ ...searchParams, ...{ keyword: value, page: 1 } }));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') clickHandler();
  };

  return (
    <>
      <Input
        min-width={'100%'}
        icon={<IconSearch size="1.2rem" />}
        placeholder="Введите название вакансии"
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => handleKeyPress(e)}
        defaultValue={searchParams.keyword}
        styles={{
          input: {
            '::placeholder': {
              fontSize: '0.875rem',
              fontFamily: 'Inter',
              fontWeight: 400,
              position: 'relative',
              left: '-1rem',
            },
          },
        }}
        ff={'Inter'}
        fw={400}
        fz={'0.875rem'}
        mb={'1rem'}
        iconWidth={'2.25rem'}
        rightSection={
          <Button
            type="button"
            right={'1.7rem'}
            h={'2rem'}
            w={'5.2rem'}
            radius={'0.5rem'}
            ff={'Inter'}
            fw={600}
            lh={1.5}
            className={styles.search__button}
            onClick={clickHandler}
          >
            Поиск
          </Button>
        }
        radius="md"
        size="lg"
      />
    </>
  );
};

export default SearchBar;
