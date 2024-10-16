import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';

import Main from './main';

const root = createRoot(document.getElementById('app'));

root.render(<Provider store={store}><Main /></Provider>);

if (module.hot) {
  module.hot.accept('./main', () => {
    console.log('Reloading.');
    root.render(<Main />);
  });
}