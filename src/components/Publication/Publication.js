import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from '../Img/Img';
import './Publication.css';


class Publication extends Component {

    render() {
        return (
            <div class="publication">
                <div class="publication_header">
                    <div><Img src={this.props.user_avatar} alt="avatar" round={true} width="2rem" height="2rem" />
                        <span class="publication_user_name">{this.props.user_name}</span></div>
                    <div> <i class="material-icons">keyboard_arrow_down</i></div>
                </div>
                <div class="publication_content">
                    {this.props.content}
                </div>
                <div class="publication_footer">
                <div><i class="material-icons">thumb_up_alt</i><span>{this.props.likes}</span></div>
                <div><i class="material-icons">sms</i><span>{this.props.comments}</span></div>
                <div> <i class="material-icons">share</i> <span>Share</span></div >
                </div>
            </div>
        )
    }
    static propTypes =
    {
        id: PropTypes.string,
        user_name: PropTypes.string,
        user_avatar: PropTypes.string,
        content: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.number,

    }
}
export default Publication;