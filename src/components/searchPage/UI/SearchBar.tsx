import React from 'react';
import { Button, Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const SearchBar = () => {
  return (
    <Input
      width={'100%'}
      icon={<IconSearch size="0.8rem" />}
      placeholder="Введите название вакансии"
      rightSection={
        <Button type="button" right={'1.7rem'} h={'2rem'} w={'5.2rem'}>
          Поиск
        </Button>
      }
      radius="md"
      size="lg"
    />
  );
};

export default SearchBar;
