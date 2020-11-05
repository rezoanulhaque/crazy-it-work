import React from 'react';
import { Link } from 'react-router-dom';

const HomeBody = () => {
    return (
        <div className="App" style={{margin: '50px'}}>
            <h2>Upload Your Images</h2>
            <Link to="/uploadimages">Upload Images</Link>
        </div>
    );
};

export default HomeBody;