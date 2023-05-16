import React, { FC } from 'react';
import { Pagination } from '@mantine/core';

interface IPagination {
  total: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
  margin: string;
  defaultPage?: number;
}

const StyledPagination: FC<IPagination> = ({ total, onChange, margin, defaultPage }) => {
  // console.log(defaultPage);
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
      value={defaultPage ?? 1}
      onChange={onChange}
    />
  );
};

export default StyledPagination;
