import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyles';

import Routes from './routes';

function App() {
  return (
  <>
    <GlobalStyle/>
    <Router>
      <Routes />
    </Router>
  </>
  );
}

export default App;
