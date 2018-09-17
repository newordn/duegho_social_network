import React, { Component } from 'react';
import './Img.css';
import PropTypes from 'prop-types';


class Img extends Component {

    
    render() {
        if(this.props.round)
        return <img class="border-radius" src={this.props.src} alt={this.props.alt} style={{
            width: this.props.width, height : this.props.height}} />
            return <img  src={this.props.src} alt={this.props.alt} style={{
            width: this.props.width, height : this.props.height}} />
    }
static propTypes=
{
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    round : PropTypes.bool
}
}
export default Img;