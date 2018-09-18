import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import './SearchBar.css';

class SearchBar extends Component {
    
    render()
    {
        return(
           <Input width="20rem" id="searchBar"  type="text" placeholder={this.props.placeholder} name={this.props.name} />
        )
    }
    static propTypes =
    {
        placeholder: PropTypes.string
    }
}

export default SearchBar;