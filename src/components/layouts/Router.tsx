import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './RootLayout';
import SearchPage from '../searchPage/SearchPage';
import NotFoundPage from '../notFoundPage/NotFoundPage';
import FavoritesPage from '../favoritesPage/FavoritesPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<SearchPage />} />
      <Route path="favorites" element={<FavoritesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
