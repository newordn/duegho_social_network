import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

class Header extends Component {

    render() {
        return (
             <header>
                 <h1 className="duegho">Duegho</h1>
                <SearchBar/>    
                <div>
                    <i className="material-icons">home</i>
                    <i className="material-icons">notifications_none</i>
                    <i className="material-icons">email</i>
                    <img alt="Avatar" className="user_avatar"
                    src={this.props.user_avatar}/>
                    <span>{this.props.user_name}</span>
                    <i className="material-icons">keyboard_arrow_down</i>
                </div>
             </header>
            )
    }
}

export default Header;