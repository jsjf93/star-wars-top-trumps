import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import axe from '@axe-core/react';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { env } from './env';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.css';

if (env.environment !== 'production') {
  axe(React, ReactDOM, 1000, {});
}

const client = new ApolloClient({
  uri: env.apiUrl,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router history={createBrowserHistory()}>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
