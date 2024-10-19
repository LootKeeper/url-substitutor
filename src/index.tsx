import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import store from './store';

import 'normalize.css';
import './global.css';

import Main from './main';

const root = createRoot(document.getElementById('app'));

root.render(
  <Provider store={store}>
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  </Provider>
);

if (module.hot) {
  module.hot.accept('./main', () => {
    console.log('Reloading.');
    root.render(<Main />);
  });
}
