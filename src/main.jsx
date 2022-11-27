import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import GeneralProvider from '@/store/GeneralProvider';
import { store } from '@/store/store';

import App from '@/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <GeneralProvider>
          <App />
        </GeneralProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
