import React, { Component } from 'react';
import Img from '../components/Img/Img';
import FriendProposition from '../components/FriendProposition/FriendProposition';
import Follow from '../components/Follow/Follow';
import Button from '../components/Button/Button';
import './Profile.css';


class Profile extends Component {

    render() {
        return (
            <div className="profile">
                <section className="section1">
                    <div class="section1_col_1">
                        <Img width="100%" src="/imgs/cover.png" alt="Cover Image"  round={false} />
                        <div class="section_col_1_footer">
                        <Follow followers={true} />    
                        <Follow following={true}/>
                        <Button alignment="center" backgroundColor="bg-white" text="Modifier le profil" textStyle="gray" height="changeProfil-height" width="changeProfil-width" />
                        </div>
                    </div>
                    <div class="section1_col_2 section1_friendProposition">
                        <FriendProposition/>
                        <Button alignment="center" backgroundColor="bg-white" text="À propos 
                        • Developpeurs • 
                        Publicités • Blog 
                        • Confidentialité • Conditions d'utilisation" textStyle="gray" alignment="left">
                        </Button>
                    </div>
                </section>
            </div>
            );
    }
}
export default Profile;