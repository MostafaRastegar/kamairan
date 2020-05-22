/**
 *
 * Router.js

 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import Kit from '../Kit';
import CoursePage from '../CoursePage';
import AuthenticationPage from '../AuthenticationPage';
import VerifyCode from '../VerifyCodePage';
import Register from '../RegisterPage';
import Profile from '../ProfilePage/mainPage';
import ProfileService from '../ProfilePage/servicePage';
import ProfilechPass from '../ProfilePage/changePassPage';
import ProfileExtention from '../ProfilePage/extentionPage';
import ProfileCharge from '../ProfilePage/chargePage';
import ProfileSetting from '../ProfilePage/settingPage';
import ProfileTicket from '../ProfilePage/TicketPage';
import ProfilePayment from '../ProfilePage/paymentPage';
import ProfileSupport from '../ProfilePage/supportPage';
import Page404 from '../Page404';
import SnappLayout from '../../components/snappLayout';

function App() {
  return (
    <SnappLayout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/kit" component={Kit} />
        <Route exact path="/course" component={CoursePage} />
        <Route exact path="/authentication" component={AuthenticationPage} />
        <Route exact path="/verify-code" component={VerifyCode} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile-service" component={ProfileService} />
        <Route exact path="/profile-password" component={ProfilechPass} />
        <Route exact path="/profile-extention" component={ProfileExtention} />
        <Route exact path="/profile-charge" component={ProfileCharge} />
        <Route exact path="/profile-setting" component={ProfileSetting} />
        <Route exact path="/profile-ticket" component={ProfileTicket} />
        <Route exact path="/profile-payment" component={ProfilePayment} />
        <Route exact path="/profile-support" component={ProfileSupport} />
        <Route component={Page404} />
      </Switch>
    </SnappLayout>
  );
}

export default App;
