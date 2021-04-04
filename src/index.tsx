// React
import React from 'react';
import ReactDOM from 'react-dom';

// Css
import './styles/styles.scss';

// App
import App from './containers/App';
import { GlobalProvider } from './context/GlobalState';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>

      <App />

    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
