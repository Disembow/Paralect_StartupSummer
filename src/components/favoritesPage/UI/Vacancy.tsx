import React from 'react';
import { useParams } from 'react-router';
import { useAppSelector } from '../../../app/hooks';
import Card from '../../searchPage/UI/Card';
import Transcription from './Transcription';
import { getOneFavorite } from '../../../app/localStorage';
import styles from './Vacancy.module.scss';
import NotFoundPage from '../../notFoundPage/NotFoundPage';

const Vacancy = () => {
  const { id: routeId } = useParams();
  let data;

  const storageData = getOneFavorite(Number(routeId));
  const storeData = useAppSelector((state) =>
    state.cards.jobsData.flat().filter((e) => e.id === Number(routeId))
  );

  if (storageData.length) {
    data = storageData;
  } else {
    data = storeData;
  }

  if (data.length > 0) {
    const {
      id,
      profession,
      town,
      firm_name,
      payment_from,
      payment_to,
      type_of_work,
      currency,
      vacancyRichText,
    } = data[0];

    return (
      <div className={styles.wrapper}>
        <Card
          cardType="item"
          key={id}
          id={id}
          profession={profession}
          firm_name={firm_name}
          town={town}
          payment_from={payment_from}
          payment_to={payment_to}
          type_of_work={type_of_work}
          currency={currency}
        />
        {vacancyRichText ? <Transcription vacancyRichText={vacancyRichText} /> : <></>}
      </div>
    );
  }

  return <NotFoundPage />;
};

export default Vacancy;
