import React, { FC } from 'react';
import styles from './Vacancy.module.scss';
import { TJobsDate } from '../../../types/dataType';
import parse from 'html-react-parser';

type Description = Pick<TJobsDate, 'vacancyRichText'>;

const Transcription: FC<Description> = ({ vacancyRichText }) => {
  const trimed = vacancyRichText!.replaceAll('<p><br /></p>', '');

  return <div className={styles.transcription}>{parse(trimed)}</div>;
};

export default Transcription;
