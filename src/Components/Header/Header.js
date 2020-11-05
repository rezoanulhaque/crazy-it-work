import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header flex-container">
            <div className="nav links">
                <Link to="/home">Home</Link>
                <Link to="/uploadimages">UploadImage</Link>
                <Link to="/editimage">EditImage</Link>
            </div> 
        </div>
    );
};

export default Header;