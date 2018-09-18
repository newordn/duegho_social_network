import React, { Component } from 'react';
import Setting from './Setting/Setting';
import Profile from './Profile/Profile';
import Header from './components/Header/Header';
import './App.css';
import { BrowserRouter as Router,Link, Route, Switch } from 'react-router-dom';


class App extends Component {

    render() {
        return (
            <Router>
                <div class="app">
                <div class="margin-bottom"><Header user_name="Duegho" user_avatar="/imgs/0.png" /></div>
                            <Switch>
                                {/*Routes*/}
                                <Route path="/profile" component={Profile} />
                                <Route path="/setting" component={Setting} />
                                {/*By default*/}
                                <Route path="/" component={Profile} />
                                {/*Routes*/}
                            </Switch>
                </div>
           
            </Router>
            
        )
    }
}
export default App;