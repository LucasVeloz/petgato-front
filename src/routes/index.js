import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ForgetPassword from '../pages/forgetPassword';
import Cadastro from '../pages/cadastro';
import Login from '../pages/login';
import Feed from '../pages/feed';
import ResetPassword from '../pages/resetPassword';
import Profile from '../pages/profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Cadastro} />
      <Route path="/forget" component={ForgetPassword} />
      <Route path="/reset" component={ResetPassword} />
      <Route path="/" component={Feed} exact/>
      <Route path="/profile" component={Profile}/>
    </Switch>
  );
}
