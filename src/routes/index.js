import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cadastro from '../pages/cadastro';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Cadastro} />
      <Route path="/register" component={Cadastro} />
    </Switch>
  );
}
