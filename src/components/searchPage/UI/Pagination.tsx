import React, { FC, useEffect, useState } from 'react';
import styles from './Pagination.module.scss';
import { LAST_PAGE, fetchJobs } from '../../../app/slices/cardsSlice';
import { useAppDispatch } from '../../../app/hooks';

const Pagination: FC = () => {
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchJobs(['', currentPage]));
  }, [currentPage, dispatch]);

  const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id !== '...') setCurrentPage(Number(e.currentTarget.id));
  };

  const next = () => {
    setCurrentPage((page) => page + 1);
  };

  const prev = () => {
    setCurrentPage((page) => page - 1);
  };

  const setPageNumbers = (number: number, maxPage: number): (number | string)[] => {
    let result: (number | string)[] = [];

    if (number <= 3) {
      for (let i = 1; i <= number + 2; i++) {
        result.push(i);
      }
      result.push('...');
      result.push(LAST_PAGE);
    } else if (number > 3 && number < maxPage && number < maxPage - 1) {
      result.push(1);
      result.push('...');
      for (let i = number - 2; i <= number + 2; i++) {
        result.push(i);
      }
      result.push('...');
      result.push(LAST_PAGE);
    } else if (number <= maxPage) {
      result.push(1);
      result.push('...');
      for (let i = maxPage - 2; i <= maxPage; i++) {
        result.push(i);
      }
    } else {
      result = [];
    }

    return result;
  };

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.page_number} ${styles.arrow_left}`}
        disabled={currentPage === 1}
        onClick={prev}
      />

      {setPageNumbers(currentPage, LAST_PAGE)?.map((page) => (
        <div
          className={`${styles.page_number}  ${page === '...' ? '' : styles.pointer} ${
            page === currentPage ? styles.active : ''
          }`}
          key={page}
          id={page.toString()}
          onClick={(e) => clickHandler(e)}
        >
          <span>{page}</span>
        </div>
      ))}

      <button
        className={`${styles.page_number} ${styles.arrow_right}`}
        disabled={currentPage === LAST_PAGE}
        onClick={next}
      />
    </div>
  );
};

export default Pagination;
