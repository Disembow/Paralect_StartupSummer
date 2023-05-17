import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './RootLayout';
import SearchPage from '../searchPage/SearchPage';
import NotFoundPage from '../notFoundPage/NotFoundPage';
import FavoritesPage from '../favoritesPage/FavoritesPage';
import VacancyLayout from './VacancyLayout';
import Vacancy from '../favoritesPage/UI/Vacancy';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<VacancyLayout />}>
        <Route index element={<SearchPage />} />
        <Route path=":id" element={<Vacancy />} />
      </Route>

      <Route path="favorites" element={<VacancyLayout />}>
        <Route index element={<FavoritesPage />} />
        <Route path=":id" element={<Vacancy />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
