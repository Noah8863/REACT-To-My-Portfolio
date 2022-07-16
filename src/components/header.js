import React from 'react';
import profilePicture from '../images/Profile-Picture.png';
import CardTemplate from './CardTemplate'

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
                <h2 id="name"> Noah Hoffman </h2>
            </div>
            <CardTemplate />
        </section>
    )
}

export default Header;