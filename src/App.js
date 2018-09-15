import React, { Component } from 'react';
import SettingSideBar from './components/SideBar/SettingSideBar';
import Header from './components/Header/Header';
import  NewPasswordForm from './components/NewPasswordForm/NewPasswordForm';
import './App.css';
class App extends Component {
  render() {
    return (
            <div>
             <Header user_name="Duegho" user_avatar="imgs/0.png"/>
             <div className="container">
              <SettingSideBar/>
              <div className="container__form">
                <NewPasswordForm/>
              </div>
             </div>
            </div>
    );
  }
}

export default App;
