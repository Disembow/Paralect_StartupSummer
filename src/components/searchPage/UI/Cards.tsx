import React from 'react';
import Card from './Card';
import styles from './Card.module.scss';
import { TJobsDate } from '../../../types/dataType';

interface ICards {
  data: TJobsDate[];
}

const Cards = ({ data }: ICards) => {
  return (
    <div className={styles.cards__box}>
      {data
        .flat()
        .map(({ id, profession, town, payment_from, payment_to, type_of_work, currency }) => (
          <Card
            schedule={type_of_work.title}
            salary_from={payment_from}
            salary_to={payment_to}
            key={id}
            prof={profession}
            location={town.title}
            currency={currency}
          />
        ))}
    </div>
  );
};

export default Cards;
