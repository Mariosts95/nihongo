import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalProvider from '@/store/GlobalProvider';

import App from '@/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Router>
  </React.StrictMode>
);
