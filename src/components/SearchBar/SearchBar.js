import React, { Component } from 'react';
import Input from '../Input/Input';
import './SearchBar.css';

class SearchBar extends Component {
    
    render()
    {
        return(
           <Input id="searchBar" width="search_bar_width" type="text" placeholder="Rechercher sur Duegho" name="searchBar" />
        )
    }
    static propTypes =
    {
    }
}

export default SearchBar;