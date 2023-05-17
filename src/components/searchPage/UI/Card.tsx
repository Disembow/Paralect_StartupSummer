import React, { FC, useEffect, useState } from 'react';
import { setFavourits, getFavourits } from '../../../app/localStorage';
import { TJobsDate } from '../../../types/dataType';
import styles from './Card.module.scss';

const Card: FC<TJobsDate> = ({
  cardType,
  id,
  profession,
  firm_name,
  town,
  payment_from,
  payment_to,
  type_of_work,
  currency,
  vacancyRichText,
}) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [card, setCard] = useState<TJobsDate | null>(null);

  useEffect(() => {
    setCard({
      id,
      profession,
      firm_name,
      town,
      payment_from,
      payment_to,
      type_of_work,
      currency: currency.toUpperCase(),
      vacancyRichText,
    });

    const isInFavoorits = getFavourits().filter((e) => e.id === id).length;
    setIsFavourite(isInFavoorits === 1);
  }, [
    currency,
    id,
    firm_name,
    profession,
    town,
    payment_from,
    payment_to,
    type_of_work,
    vacancyRichText,
  ]);

  const salary =
    payment_from === 0
      ? 'По результатам собеседования'
      : payment_to === 0
      ? `зп от ${payment_from} ${currency}`
      : `зп от ${payment_from} - ${payment_to} ${currency}`;

  const addToFavourits = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsFavourite(!isFavourite);

    const currStorage = getFavourits();

    if (card) {
      if (!isFavourite && !currStorage) {
        setFavourits([card]);
      } else if (!isFavourite && currStorage) {
        setFavourits([card, ...currStorage]);
      } else if (currStorage) {
        setFavourits(currStorage.filter((e) => e.id !== card?.id));
      }
    }
  };

  return (
    <div className={styles.card__item}>
      <div className={styles.vacancy__item}>
        <h4
          className={
            cardType
              ? `${styles.vacancy__title} ${styles.vacancy__title_item}`
              : styles.vacancy__title
          }
        >
          {profession}
        </h4>
        <div
          className={
            cardType
              ? `${styles.vacancy__terms} ${styles.vacancy__terms_item}`
              : styles.vacancy__terms
          }
        >
          <span>{salary}</span>
          <span className={styles.vacancy__schedule}>{type_of_work.title}</span>
        </div>
        <div className={styles.vacancy__location}>
          <span className={styles.location__image} />
          <span className={styles.location__name}>{town.title}</span>
        </div>
      </div>
      <div
        className={isFavourite ? styles.favorits__star_filled : styles.favorits__star_empty}
        onClick={(e) => addToFavourits(e)}
        data-elem={`vacancy-${id}-shortlist-button`}
      />
    </div>
  );
};

export default Card;
