import { TFilters } from './slices/cardsSlice';

export const LOGIN = 'sergei.stralenia@gmail.com';
export const PASSWORD = 'paralect123';
export const CLIENT_ID = 2356;
export const HR = 0;
export const CLIENT_SECRET =
  'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';
export const X_SECRET_KEY = 'GEU4nvd3rej*jeh.eqp';

export const authHeaders = {
  'Content-Type': 'application/json',
  'x-secret-key': X_SECRET_KEY,
  'X-Api-App-Id': CLIENT_SECRET,
};

const API_LINK = 'https://startup-summer-2023-proxy.onrender.com/2.0/';
const API_VACANCIES = 'vacancies/';
const API_INDUSTRIES = 'catalogues/';
const API_AUTH = 'oauth2/password';
export const JOBS_PER_PAGE = 10;

export const getURLString = (
  type: 'auth' | 'industries' | 'initial' | 'filter' | '',
  payload?: number | string | TFilters
): string => {
  switch (type) {
    case 'auth':
      return `${API_LINK}${API_AUTH}?login=${LOGIN}&password=${PASSWORD}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&hr=${HR}`;
    case 'industries':
      return `${API_LINK}${API_INDUSTRIES}`;
    case 'initial':
      return `${API_LINK}${API_VACANCIES}?page=1&count=${JOBS_PER_PAGE}`;
    case 'filter':
      const { salaryFrom, salaryTo, select, page, keyword } = payload as TFilters;
      return `${API_LINK}${API_VACANCIES}?page=${page}&count=${JOBS_PER_PAGE}&published=1&payment_from=${salaryFrom}&payment_to=${salaryTo}&catalogues=${select}&no_agreement=1&keyword=${keyword}`;
    default:
      return '';
  }
};
