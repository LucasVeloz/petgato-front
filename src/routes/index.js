import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ForgetPassword from '../pages/forgetPassword';
import Cadastro from '../pages/cadastro';
import Login from '../pages/login';
export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Login} exact/>
      <Route path="/register" component={Cadastro} />
      <Route path="/forget" component={ForgetPassword} />
    </Switch>
  );
}
