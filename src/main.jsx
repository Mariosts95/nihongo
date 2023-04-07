import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalProvider from '@/store/GlobalProvider';

import App from '@/App.jsx';

ReactGA.initialize('G-C4JNGV8HTM');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Router>
  </React.StrictMode>
);
