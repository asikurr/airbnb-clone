import React from 'react';
import './searchresult-style.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star'
const SearchResult = ({img, location, title, description,star, price, total}) => {
    return (
        <div className="searchResult">
            <img src={img} alt=""/>
            <FavoriteBorderIcon className="searchResult__heart"/>
            <div className="searchResult__info">
                <div searchResult__infoTop>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>-------</p>
                    <p>{description}</p>
                </div>

                <div searchResult__infoBottom>
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star"/>
                    </div>
                    <p>
                        <strong>{star}</strong>
                    </p>

                </div>
                <div className="searchResult__price">
                    <h2>{price}</h2>
                    <p>{total}</p> 
                </div>
            </div>
        </div>
    );
};

export default SearchResult;