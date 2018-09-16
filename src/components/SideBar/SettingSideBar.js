import React, { Component } from 'react';
import './SettingSideBar.css';
import Button from '../Button/Button';
import {Redirect} from 'react-router-dom';

class SettingSideBar extends Component {

    constructor(props)
    {
        super(props);
        this.state = {clickedHighlight:[true,false,false,false,false]};
        this.handleClick= this.handleClick.bind(this);
    }
    handleClick(i)
    {
        let clicked = this.state.clickedHighlight;
        let clickedPur = clicked.map((e,j)=>{if(j==i) return true; return false;})
       this.setState({clickedHighlight:clickedPur});
   
    }
    render() {
        let arr = ["Compte", "Confidentialité et Sécurité", "Mot de passe"
            , "Notifications", "Comptes bloqués"];
        let redirection;
        if(this.state.clickedHighlight[0])
                redirection= <Redirect to="/compte" />
        else if (this.state.clickedHighlight[2])
            redirection = <Redirect to="/new_password" />
        return (
            <div className="settingSideBar">
                {redirection}
                <h1>Settings</h1>
                {arr.map((e,i)=>{ 
                    return <Button id={i} onClick={this.handleClick} clickedHighlight={this.state.clickedHighlight[i]}  key={i} width="sidebar-width" height="sidebar-height" backgroundColor="bg-white" text={e} alignment="left"/>
                    })}

            </div>
            );
    }
}

export default SettingSideBar;