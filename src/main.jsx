import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import ThemeSelectionProvider from './store/ThemeSelectionProvider';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeSelectionProvider>
        <App />
      </ThemeSelectionProvider>
    </Router>
  </React.StrictMode>
);
