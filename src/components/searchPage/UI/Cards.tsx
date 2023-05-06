import React from 'react';
import Card from './Card';
import styles from './Card.module.scss';

export type TData = {
  id?: number;
  prof: string;
  salary: string | number;
  schedule: string;
  location: string;
};

const tempData: TData[] = [
  {
    id: 1,
    prof: 'Экономист',
    salary: '70000',
    schedule: 'полный рабочий день',
    location: 'Белосток',
  },
  {
    id: 2,
    prof: 'Бухгалтер',
    salary: '60000',
    schedule: 'частичная занятость',
    location: 'Гродно',
  },
  {
    id: 3,
    prof: 'Начальник',
    salary: '170000',
    schedule: 'полный рабочий день',
    location: 'Минск',
  },
  {
    id: 4,
    prof: 'Экономист',
    salary: '70000',
    schedule: 'полный рабочий день',
    location: 'Брест',
  },
];

const Cards = () => {
  return (
    <div className={styles.cards__box}>
      {tempData.map(({ id, prof, salary, schedule, location }) => (
        <Card key={id} prof={prof} salary={salary} schedule={schedule} location={location} />
      ))}
    </div>
  );
};

export default Cards;
