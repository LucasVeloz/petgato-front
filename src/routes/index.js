import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ForgetPassword from '../pages/forgetPassword';
import Cadastro from '../pages/cadastro';
import Login from '../pages/login';
import Feed from '../pages/feed';
import ResetPassword from '../pages/resetPassword';
import Perfil from '../pages/perfil';
export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Cadastro} />
      <Route path="/forget" component={ForgetPassword} />
      <Route path="/reset" component={ResetPassword} />
      <Route path="/perfil" component={Perfil} />
      <Route path="/" component={Feed} exact/>
    </Switch>
  );
}
