import React, { FC } from 'react';
import styles from './Vacancy.module.scss';
import { TJobsDate } from '../../../types/dataType';
import parse from 'html-react-parser';

type Description = Pick<TJobsDate, 'vacancyRichText'>;

const Transcription: FC<Description> = ({ vacancyRichText }) => {
  if (vacancyRichText) console.log(vacancyRichText);

  return <div className={styles.transcription}>{parse(vacancyRichText!)}</div>;
};

export default Transcription;
