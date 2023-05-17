import React, { FC, useState, useRef } from 'react';
import { Select } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useOnClickOutside } from 'usehooks-ts';

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
  const [active, setActive] = useState<boolean>(false);

  const ref = useRef<HTMLInputElement>(null);

  const handleClickOutside = () => {
    if (active) setActive(!active);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <Select
      className="select"
      ref={ref}
      data-elem="industry-select"
      onChange={(e) => {
        onChange(e);
      }}
      onClick={() => {
        setActive(!active);
      }}
      label="Отрасль"
      labelProps={labelProps}
      placeholder="Выберете отрасль"
      rightSection={
        active ? (
          <IconChevronUp size="1.5rem" color="#5E96FC" />
        ) : (
          <IconChevronDown size="1.5rem" color="#ACADB9" />
        )
      }
      data={data}
      defaultValue={defaultValue}
      value={value}
      styles={{
        rightSection: { pointerEvents: 'none' },
        input: {
          '::placeholder': placeholderStyle,
          ':focus': {
            borderColor: '#5e96fc',
          },
        },
        dropdown: {
          borderRadius: '0.5rem',
          data: { height: '5rem' },
          '[data-hovered]': {
            backgroundColor: '#DEECFF',
            borderRadius: '0.5rem',
          },
          '[data-selected]': {
            backgroundColor: '#5E96FC',
            borderRadius: '0.5rem',
          },
        },
      }}
      transitionProps={{ transition: 'pop-top-left', duration: 100, timingFunction: 'ease' }}
      withinPortal
      mb={'16px'}
      size="md"
      radius={8}
      maxDropdownHeight={188}
    />
  );
};

export default FilterSelect;
