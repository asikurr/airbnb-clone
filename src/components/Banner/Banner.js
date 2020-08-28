import React , {useState}from 'react';
import './banner-style.css'
import {Button} from '@material-ui/core'
import SearchDate from '../searchwithDatePicker/SearchDate';


const Banner = () => {
    const [showSearch, setShowSearch] = useState(false)
    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <SearchDate/> }
                <Button onClick={() => setShowSearch(!showSearch)} className="banner__searchBtn" variant="outlined">
                    {showSearch ? 'Hide': 'Search Date'}
                </Button>
                
            </div>
            <div className="banner__info">
                <h2>Get out and stretch your imagination</h2>
                <h5>Plan a different kind of Getway to uncover the hiddin gem near you.</h5>
                <Button variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    );
};

export default Banner;