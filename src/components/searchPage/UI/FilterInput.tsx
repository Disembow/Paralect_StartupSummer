import React, { FC } from 'react';
import { NumberInput } from '@mantine/core';
import { IconSelector } from '@tabler/icons-react';

interface IFilterInput {
  label?: string;
  placeholder: string;
  onChange: (e: number | '') => void;
  labelProps: {
    style: {
      fontWeight: number;
      fontFamily: string;
      marginBottom: string;
    };
  };
  defaultValue: number | '';
  value: number | '';
  placeholderStyle: {
    [key: string]: string | number;
  };
}

const FilterInput: FC<IFilterInput> = ({
  label,
  labelProps,
  onChange,
  defaultValue,
  value,
  placeholderStyle,
  placeholder,
}) => {
  const CustomIconSelector = () => {
    return <IconSelector strokeWidth="1.25" color="#ACADB9" />;
  };

  return (
    <NumberInput
      placeholder={placeholder}
      step={100}
      min={0}
      size="md"
      labelProps={labelProps}
      mb={'8px'}
      label={label}
      radius={8}
      rightSection={<CustomIconSelector />}
      defaultValue={defaultValue}
      value={value}
      styles={{
        rightSection: { pointerEvents: 'none' },
        input: {
          '::placeholder': placeholderStyle,
        },
      }}
      onChange={onChange}
    />
  );
};

export default FilterInput;
