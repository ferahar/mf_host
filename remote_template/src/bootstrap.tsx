import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from './components/error-boundary';

import App from './components/app';

const HotApp = () => (
  <ErrorBoundary>
    <Router>
      <App />
    </Router>
  </ErrorBoundary>
);

ReactDOM.render(
  <HotApp/>,
  document.getElementById('root'),
);

