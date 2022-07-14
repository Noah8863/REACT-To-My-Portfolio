import React from 'react';
import profilePicture from '../public/Profile-Picture.png'


function Header(props) {
    return (
        <section className="landingPageSection">
            <div className="particles-js">
                <div className="topnav">
                    <div class="topnav-left">
                        <a href="https://www.theverge.com/tech" target="_blank">News</a>
                        <a href="#contact">Social Media</a>
                    </div>
                    <div className="topnav-right">
                        <a href="#projects">Projects</a>
                    </div>
                </div>
                <img src={profilePicture} id='avatarPicture' />
                <h2> Noah Hoffman </h2>
            </div>
        </section>
    )
}

export default Header;