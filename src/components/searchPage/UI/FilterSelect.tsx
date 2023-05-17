import React, { FC } from 'react';
import { Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

interface IFilterSelect {
  onChange: (e: string | null) => void;
  labelProps: {
    style: {
      fontWeight: number;
      fontFamily: string;
      marginBottom: string;
    };
  };
  data: {
    value: string;
    label: string;
  }[];
  defaultValue: string;
  value: string;
  placeholderStyle: {
    [key: string]: string | number;
  };
}

const FilterSelect: FC<IFilterSelect> = ({
  onChange,
  labelProps,
  data,
  defaultValue,
  value,
  placeholderStyle,
}) => {
  return (
    <Select
      data-elem="industry-select"
      onChange={onChange}
      label="Отрасль"
      labelProps={labelProps}
      placeholder="Выберете отрасль"
      rightSection={<IconChevronDown size="1.5rem" color="#ACADB9" />}
      data={data}
      defaultValue={defaultValue}
      value={value}
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
      transitionProps={{ transition: 'pop-top-left', duration: 100, timingFunction: 'ease' }}
      withinPortal
      mb={'16px'}
      size="md"
      radius={8}
    />
  );
};

export default FilterSelect;
