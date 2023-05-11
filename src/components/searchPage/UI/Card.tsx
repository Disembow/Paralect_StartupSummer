import React, { FC, useEffect, useState } from 'react';
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
      currency,
    });
  }, [currency, id, location, prof, salary_from, salary_to, schedule]);

  const salary =
    salary_from === 0
      ? 'По результатам собеседования'
      : salary_to === 0
      ? `зп от ${salary_from} ${currency.toUpperCase()}`
      : `зп от ${salary_from} - ${salary_to} ${currency.toUpperCase()}`;

  const setFavourits = (array: TCard[]): void => {
    localStorage.setItem('favorit_jobs', JSON.stringify(array));
  };

  const getFavourits = (): TCard[] => {
    const LS = localStorage.getItem('favorit_jobs');
    if (LS) return JSON.parse(LS);
    return [];
  };

  const addToFavourits = () => {
    setIsFavourite(!isFavourite);

    const currStorage = localStorage.getItem('favorit_jobs');

    if (!isFavourite && !currStorage) {
      setFavourits([card!]);
    } else if (!isFavourite && currStorage) {
      setFavourits([card!, ...getFavourits()]);
    } else if (currStorage) {
      setFavourits(getFavourits().filter((e) => e.id !== card?.id));
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
