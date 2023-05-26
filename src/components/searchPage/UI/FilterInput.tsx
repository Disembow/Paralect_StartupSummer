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
      marginBottom: string;
    };
  };
  defaultValue: number | '';
  value: number | '';
  placeholderStyle: {
    [key: string]: string | number;
  };
  dataElem: string;
  marginBottom: string;
}

const FilterInput: FC<IFilterInput> = ({
  label,
  labelProps,
  onChange,
  defaultValue,
  value,
  placeholderStyle,
  placeholder,
  dataElem,
  marginBottom,
}) => {
  const CustomIconSelector = () => {
    return <IconSelector strokeWidth="1.25" color="#ACADB9" />;
  };

  return (
    <NumberInput
      data-elem={dataElem}
      placeholder={placeholder}
      step={100}
      min={0}
      size="md"
      labelProps={labelProps}
      mb={marginBottom}
      label={label}
      radius={8}
      rightSection={<CustomIconSelector />}
      defaultValue={defaultValue}
      value={value}
      styles={{
        rightSection: { pointerEvents: 'none' },
        input: {
          '::placeholder': placeholderStyle,
          ':hover': {
            borderColor: '#5e96fc',
          },
          caretColor: '#5e96fc',
        },
      }}
      onChange={onChange}
    />
  );
};

export default FilterInput;
