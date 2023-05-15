import React, { FC } from 'react';
import Card from './Card';
import styles from './Card.module.scss';
import { TJobsDate } from '../../../types/dataType';
import { useNavigate } from 'react-router';

interface ICards {
  data: TJobsDate[];
}

const Cards: FC<ICards> = ({ data }) => {
  const navigate = useNavigate();

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
            vacancyRichText,
          }) => (
            <div key={id} className={styles.card__item_wrapper} onClick={() => navigate(`${id}`)}>
              <Card
                type_of_work={type_of_work}
                firm_name={firm_name}
                payment_from={payment_from}
                payment_to={payment_to}
                id={id}
                profession={profession}
                town={town}
                currency={currency}
                vacancyRichText={vacancyRichText}
              />
            </div>
          )
        )}
    </div>
  );
};

export default Cards;
