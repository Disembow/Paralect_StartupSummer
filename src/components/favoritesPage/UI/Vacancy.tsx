import React from 'react';
import { useParams } from 'react-router';
import styles from './Vacancy.module.scss';
import { useAppSelector } from '../../../app/hooks';
import Card from '../../searchPage/UI/Card';
import Transcription from './Transcription';

const Vacancy = () => {
  const { id: route } = useParams();

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
  } = useAppSelector(
    (state) => state.cards.jobsData.flat().filter((e) => e.id === Number(route))[0]
  );

  return (
    <div className={styles.wrapper}>
      <Card
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
      <Transcription vacancyRichText={vacancyRichText} />
    </div>
  );
};

export default Vacancy;
