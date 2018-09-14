import React, { Component } from 'react';
import './SettingSideBar.css';
import Button from '../Button/Button';

class SettingSideBar extends Component {
    render() {
        let arr = ["Compte", "Confidentialité et Sécurité", "Mot de passe"
            , "Notifications", "Comptes bloqués"];
            
        return (
            <div class="settingSideBar">
                <h1>Settings</h1>
                {arr.map((e,i)=>{ 
                    return <Button key={i} width="sidebar-width" height="sidebar-height" backgroundColor="bg-white" text={e} alignment="left"/>
                    })}

            </div>
            );
    }
}

export default SettingSideBar;