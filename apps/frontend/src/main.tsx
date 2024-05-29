import { render } from 'preact';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

const rootElement = document.getElementById('root') as HTMLElement;
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
