import React from 'react';
import { Button, Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <>
      <Input
        width={'100%'}
        icon={<IconSearch size="0.8rem" />}
        placeholder="Введите название вакансии"
        ff={'Inter'}
        fw={600}
        fz={'0.875rem'}
        mb={'1rem'}
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
