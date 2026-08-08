import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import store from './store';

import 'normalize.css';
import './global.css';

import Main from './main';
import { loadNavigation } from './feature/navigation/storage';

const appElement = document.getElementById('app');

if (!appElement) {
  throw new Error('Application root element is missing');
}

const startApplication = async () => {
  try {
    await loadNavigation();

    const root = createRoot(appElement);
    root.render(
      <Provider store={store}>
        <ChakraProvider>
          <Main />
        </ChakraProvider>
      </Provider>
    );
  } catch (error) {
    console.error('URL Substitutor failed to start', error);
    appElement.setAttribute('role', 'alert');
    appElement.textContent =
      'URL Substitutor failed to start: navigation storage is unavailable or invalid.';
  }
};

void startApplication();
