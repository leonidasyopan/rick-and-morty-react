import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Routes from './routes';

import GlobalStyle from './styles/global';
import client from './common/apollo-client';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <ApolloProvider client={client}>
      <Router>
        <Routes />
      </Router>
    </ApolloProvider>
  </>
);

export default App;
