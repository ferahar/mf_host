import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { configure } from 'mobx';

import { ErrorBoundary } from './components/error-boundary';
import App from './components/app';
import './style.scss';
import gridInitKey from './utils/keys/gridInitKey';

gridInitKey();

setTimeout(() =>
  configure({
    enforceActions: 'never',
    reactionScheduler: f => setTimeout(f),
  }),
);

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

