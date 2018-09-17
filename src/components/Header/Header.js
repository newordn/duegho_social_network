import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends Component {

    constructor(props)
    {
        super(props);
       
    }
    
    render() {
        return (
              
            <header>
                 <h1 className="duegho">Duegho</h1>
                <SearchBar/>    
                <div>
                    <i className="material-icons">home</i>
                    <i className="material-icons">notifications_none</i>
                    <i className="material-icons">email</i>
                        <Link to="/profile"><img alt="Avatar" className="user_avatar" 
                            src={this.props.user_avatar} /></Link>
                        <span className="user_name">{this.props.user_name}</span>
                   <Link to="/setting/compte"> <i className="material-icons">keyboard_arrow_down</i></Link>
                </div>
             </header>
            )
    }
}

export default Header;