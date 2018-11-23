import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader';
import { rehydrate, hotRehydrate } from 'rfx-core';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import stores from './stores'; //必须引入
import { isProduction } from './utils/constants';
import IntlProviderWrap from './components/IntlProviderWrap';
import App from './App';

import('./styles/main.scss');

const store = rehydrate();

const renderApp = Component => {
  const browserHistory = createBrowserHistory();
  const routeStore = new RouterStore();
  const history = syncHistoryWithStore(browserHistory, routeStore);

  render(
    <AppContainer>
      <Provider
        store={isProduction ? store : hotRehydrate()}
        routing={routeStore}
      >
        <IntlProviderWrap>
          <Router history={history} key={Math.random()}>
            <App />
          </Router>
        </IntlProviderWrap>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

if (isProduction) {
  var revisionInfo = document.createComment(`
      Version: ${commitInfo.VERSION}
      CommitHash:${commitInfo.COMMITHASH}
      Branch:${commitInfo.BRANCH}
      Date:${new Date()}
  `);
  document.head.appendChild(revisionInfo);
  window.onload = () => {
    renderApp(App);
  };
} else {
  renderApp(App);
}

if (module.hot) {
  module.hot.accept(() => {
    renderApp(App);
  });
}
