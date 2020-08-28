import React from 'react';
import './header-style.css'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import {Avatar} from '@material-ui/core'
import {Link} from 'react-router-dom'

import logo from '../../img/logo.png'

const Header = () => {
    return (
        <div className="header">
            <Link to='/'>
            <img className="header__icon" src={logo} alt=""/>

            </Link>
            
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