import React, { Component } from 'react';
import Img from '../components/Img/Img';
import FriendProposition from '../components/FriendProposition/FriendProposition';
import './Profile.css';


class Profile extends Component {

    render() {
        return (
            <div className="profile">
                <section className="section1">
                    <div class="section1_img"><Img width="100%" src="/imgs/cover.png" alt="Cover Image"  height="20rem" round={false} /></div>
                    <FriendProposition/>
                </section>
            </div>
            );
    }
}
export default Profile;