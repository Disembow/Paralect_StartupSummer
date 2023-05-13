import React, { FC } from 'react';
import { Pagination } from '@mantine/core';

interface IPagination {
  total: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
  margin: string;
}

const StyledPagination: FC<IPagination> = ({ total, onChange, margin }) => {
  return (
    <Pagination
      m={margin}
      styles={{
        control: {
          borderRadius: '0.5rem',
          color: '#232134',
          '&[data-active]': {
            backgroundColor: '#5e96fc',
          },
        },
      }}
      position="center"
      total={total}
      onChange={onChange}
    />
  );
};

export default StyledPagination;
