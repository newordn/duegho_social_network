import React, { Component } from 'react';
import SettingSideBar from '../components/SideBar/SettingSideBar';
import  NewPasswordForm from '../components/NewPasswordForm/NewPasswordForm';
import Compte from '../components/Compte/Compte';
import LockAccount from '../components/LockAccount/LockAccount';
import Confidentiality from '../components/Confidentiality/Confidentiality';
import Notification from '../components/Notification/Notification';
import './Setting.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

// social network params
class Setting extends Component {

  render() {
   
    return (
      <Router>
             <div className="container">
             <SettingSideBar />
              <div className="container__form">
                  <Switch>
                    <Route path="/setting/new_password" component={NewPasswordForm}/>
                    <Route path="/setting/compte" component={Compte}/>
                    <Route path="/setting/confidentiality" component={Confidentiality}/>
                    <Route path="/setting/lock_accounts" component={LockAccount}/>
                    <Route path="/setting/notifications" component={Notification}/>
                  </Switch>
                </div>
              
              </div>
      </Router>
      
    );
  }
}

export default Setting;
