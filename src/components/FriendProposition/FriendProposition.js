import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from '../Img/Img';
import Button from '../Button/Button';
import './FriendProposition.css';


class FriendProposition extends Component {

     friendProposition(avatar,name,i)
    {
         return (<div class="friendProposition_item">
             <Img src={avatar} alt="avatar" key={i} round={true} width="2rem" height="2rem" />
             <span class="friendProposition_user_name">{name}</span>
             <Button alignment="center" backgroundColor="bg-aqua" text="Follow" textStyle="white" width="friendProposition-widht" height="friendProposition-height" />
         </div>)
    }
    render() {
        let arr = [{ img: "/imgs/profile.png", name:"Star Lord"},
            { img: "/imgs/profile.png", name: "Star Lord" }
            , { img: "/imgs/profile.png", name: "Star Lord" },
             { img: "/imgs/profile.png", name: "Star Lord" },
            { img: "/imgs/profile.png", name: "Star Lord" }];
            
           return(
            <div class="friendProposition">
                {arr.map(
                    (e,i)=>{
                        return this.friendProposition(e.img,e.name,i)
                    }
                )}
            </div>
           ) ;
    }
}
export default FriendProposition;