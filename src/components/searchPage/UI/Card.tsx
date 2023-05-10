import React from 'react';
import styles from './Card.module.scss';

export type TCard = {
  id?: number;
  prof: string;
  salary_from: number;
  salary_to: number;
  schedule: string;
  location: string;
  currency: string;
};

const Card = ({ prof, location, salary_from, salary_to, schedule, currency }: TCard) => {
  const salary =
    salary_from === 0
      ? 'По результатам собеседования'
      : salary_to === 0
      ? `зп от ${salary_from} ${currency.toUpperCase()}`
      : `зп от ${salary_from} - ${salary_to} ${currency.toUpperCase()}`;

  return (
    <div className={styles.card__item}>
      <div className={styles.vacancy__item}>
        <h4 className={styles.vacancy__title}>{prof}</h4>
        <div className={styles.vacancy__terms}>
          <span>{salary}</span>
          <span className={styles.vacancy__schedule}>{schedule}</span>
        </div>
        <div className={styles.vacancy__location}>
          <span className={styles.location__image} />
          <span className={styles.location__name}>{location}</span>
        </div>
      </div>
      <div className={styles.favorits__star_filled} />
    </div>
  );
};

export default Card;
