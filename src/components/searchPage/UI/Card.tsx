import React from 'react';
import styles from './Card.module.scss';
import { TData } from './Cards';

const Card = ({ prof, salary, schedule, location }: TData) => {
  return (
    <div className={styles.card__item}>
      <div className={styles.vacancy__item}>
        <h4 className={styles.vacancy__title}>{prof}</h4>
        <div className={styles.vacancy__terms}>
          <span>зп от&nbsp;</span>
          <span>{salary}</span>
          <span>&nbsp;rub</span>
          <span className={styles.vacancy__schedule}>{schedule}</span>
        </div>
        <div className={styles.vacancy__location}>
          <span className={styles.location__image} />
          <span className={styles.location__name}>{location}</span>
        </div>
      </div>
      <div className={styles.favorits__star_filled} /> {/* Add tern operator with condition */}
    </div>
  );
};

export default Card;
