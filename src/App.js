import React, { Component } from 'react';
import SettingSideBar from './components/SideBar/SettingSideBar';
import Header from './components/Header/Header';
import  NewPasswordForm from './components/NewPasswordForm/NewPasswordForm';
import './App.css';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';

// social network params
class App extends Component {
  render() {
    return (
      <Router>
            <div className="main">
             <Header user_name="Duegho" user_avatar="imgs/0.png"/>
             <div className="container">            
            <SettingSideBar />
              <div className="container__form">
                  <Switch>
                    {/*Routes*/}
                    <Route path="/new_password" component={NewPasswordForm}/>
                    <Route path="/compte" component={Compte}/>
                    <Route path="/" component={Compte}/>
                    {/*Routes*/}

                  </Switch>
                </div>
              
              </div>
               </div>
      </Router>
    );
  }
}

export default App;
