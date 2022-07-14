import React from 'react';
import profilePicture from '../images/Profile-Picture.png';


function Header() {
    return (
        <section className="landingPageSection">
            <div className="particles-js">
                <div className="topnav">
                    <div className="topnav-left">
                        <a href="https://www.theverge.com/tech" target="_blank" rel="noreferrer">News</a>
                        <a>Social Media</a>
                    </div>
                    <div className="topnav-right">
                        <a>Projects</a>
                    </div>
                </div>
                <img src={profilePicture} id='avatarPicture' />
                <h2> Noah Hoffman </h2>
            </div>
        </section>
    )
}

export default Header;