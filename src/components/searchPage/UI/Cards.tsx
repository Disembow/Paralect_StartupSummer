import React, { FC } from 'react';
import Card from './Card';
import styles from './Card.module.scss';
import { TJobsDate } from '../../../types/dataType';

interface ICards {
  data: TJobsDate[];
}

const Cards: FC<ICards> = ({ data }) => {
  return (
    <div className={styles.cards__box}>
      {data
        .flat()
        .map(
          ({
            id,
            profession,
            town,
            firm_name,
            payment_from,
            payment_to,
            type_of_work,
            currency,
          }) => (
            <Card
              type_of_work={type_of_work}
              firm_name={firm_name}
              payment_from={payment_from}
              payment_to={payment_to}
              key={id}
              id={id}
              profession={profession}
              town={town}
              currency={currency}
            />
          )
        )}
    </div>
  );
};

export default Cards;
