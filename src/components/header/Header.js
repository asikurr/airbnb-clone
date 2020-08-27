import React from 'react';
import './header-style.css'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import {Avatar} from '@material-ui/core'

import logo from '../../img/logo.png'

const Header = () => {
    return (
        <div className="header">
            <img className="header__icon" src={logo} alt=""/>

            <div className="header__center">
                <input type="text" placeholder="search"/>
                <SearchIcon/>
            </div>

            <div className="header__right">
                <p>Become a Host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>
            
        </div>
    );
};

export default Header;