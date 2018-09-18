import React, { Component } from 'react';
import Img from '../components/Img/Img';
import FriendProposition from '../components/FriendProposition/FriendProposition';
import Follow from '../components/Follow/Follow';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Publication from '../components/Publication/Publication';
import './Profile.css';


class Profile extends Component {

    render() {
        let infos = [{ icon: "location_on", label: "Paradise Island" }, 
        { icon: "", label: "titan-assaillant.com" }
            , { icon: "save", label: "August 27th 2018" }
            , { icon: "info", label: "March 30th 1998" }]
        let publications = [{user_name:"Bruce Banner",
            user_avatar: "/imgs/profile.png", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates error explicabo placeat sed voluptas non quo Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates error explicabo placeat sed voluptas non quoVoluptates error explicabo placeat sed voluptas non quo",likes:146,comments:9},
            {
                user_name: "Bruce Banner",
                user_avatar: "/imgs/profile.png", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates error explicabo placeat sed voluptas non quo Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates error explicabo placeat sed voluptas non quoVoluptates error explicabo placeat sed voluptas non quo", likes: 146, comments: 9
            }];
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
                <section className="section2">
                    <div className="section2_col_1">
                        <h3>Eren Jaeger</h3>
                        <p>Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. 
                            Voluptates error explicabo placeat sed voluptas non quo.
                        </p>
                        {infos.map((e,i)=>{
                            let infoKey="info"+i;
                            return <div className="section2_col_1_info" key={infoKey}>
                                <i class="material-icons">{e.icon}</i>
                                <span>{e.label}</span>
                            </div>})}
                    </div>
                    <div className="section2_col_2">
                        <div class="publication_searchBar"><Input id="publication" type="text" placeholder="Publier..." name={this.props.name} /></div>
                        {publications.map((e,i)=>{ 
                        let publicationKey = "publication" +i;
                        return <Publication user_name={e.user_name} key={publicationKey}
                         user_avatar={e.user_avatar} 
                        content={e.content} likes={e.likes} comments={e.comments}/>
                        })}
                     </div>
                    <div className="section2_col_3"></div>
                </section>
            </div>
            );
    }
}
export default Profile;