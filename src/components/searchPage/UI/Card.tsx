import React, { FC, useEffect, useState } from 'react';
import { setFavourits, getFavourits } from '../../../app/localStorage';
import styles from './Card.module.scss';

export type TCard = {
  id: number;
  prof: string;
  salary_from: number;
  salary_to: number;
  schedule: string;
  location: string;
  currency: string;
};

const Card: FC<TCard> = ({ id, prof, location, salary_from, salary_to, schedule, currency }) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [card, setCard] = useState<TCard | null>(null);

  useEffect(() => {
    setCard({
      id,
      prof,
      salary_from,
      salary_to,
      schedule,
      location,
      currency: currency.toUpperCase(),
    });
  }, [currency, id, location, prof, salary_from, salary_to, schedule]);

  const salary =
    salary_from === 0
      ? 'По результатам собеседования'
      : salary_to === 0
      ? `зп от ${salary_from} ${currency}`
      : `зп от ${salary_from} - ${salary_to} ${currency}`;

  const addToFavourits = () => {
    setIsFavourite(!isFavourite);

    const currStorage = getFavourits();

    if (!isFavourite && !currStorage) {
      setFavourits([card!]);
    } else if (!isFavourite && currStorage) {
      setFavourits([card!, ...currStorage]);
    } else if (currStorage) {
      setFavourits(currStorage.filter((e) => e.id !== card?.id));
    }
  };

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
      <div
        className={isFavourite ? styles.favorits__star_filled : styles.favorits__star_empty}
        onClick={addToFavourits}
      />
    </div>
  );
};

export default Card;
