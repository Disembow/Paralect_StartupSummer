import React from 'react';
import './App.scss';
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router';
import router from './components/layouts/router';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

export default App;
