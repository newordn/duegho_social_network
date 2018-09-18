import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import './SearchBar.css';

class SearchBar extends Component {
    
    render()
    {
        return(
           <Input id="searchBar" width={this.props.width} type="text" placeholder={this.props.placeholder} name={this.props.name} />
        )
    }
    static propTypes =
    {
        placeholder: PropTypes.string
    }
    static defaultProps=
    {
        width: "search_bar_width"
    }
}

export default SearchBar;