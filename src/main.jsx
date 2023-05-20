import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { loadStateFromLocalStorage } from '@/store/slices/globalSlice';

import App from '@/App.jsx';
import store from '@/store';

ReactGA.initialize('G-C4JNGV8HTM');

store.dispatch(loadStateFromLocalStorage());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
