import React, { Component } from 'react';
import './Follow.css';
import PropTypes from 'prop-types';


class Follow extends Component {


    render() {
        let label,number=395;
        if (this.props.following)
            label="Following"
            else if(this.props.followers)
            label="Followers"
        return( 
        <div class="follow">
            <span class="follow_number">{number}</span>
            <span class="follow_label">{label}</span>

        </div>
        )
    }
    static propTypes =
        {
            following: PropTypes.bool,
            followers: PropTypes.bool
        }
}
export default Follow;