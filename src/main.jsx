import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import GeneralProvider from '@/store/GeneralProvider';

import App from '@/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GeneralProvider>
        <App />
      </GeneralProvider>
    </Router>
  </React.StrictMode>
);
