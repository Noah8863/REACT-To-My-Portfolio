import React from 'react';
import profilePicture from '../images/Profile-Picture.png';
import Cards from './CardTemplate'

function Header() {
    return (
        <section className="landingPageSection">
            <div className="particlesJs">
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
                <div id='name'>
                    <h2> Noah Hoffman </h2>
                </div>
            </div>
            <div className="cardContainer">
                <div id='aboutmetextarea'>
                <h1 style={{color:"black"}}>About Me:</h1>
                    <div className="description">
                        <p>
                            My name is Noah Hoffman and I currently live in Denver, Colorado. I've lived in Denver
                            my whole life and I plan on changing that within a couple of years! I am attending a coding
                            bootcamp
                            at the
                            University of Denver to get certified as a Full Stack Web Developer. I've always had an interest in
                            technology
                            and becoming a software developer is a perfect opportunity to dive deeper in the industry.
                        </p>
                        <p>
                            Outside of loving everything about technology, I'm also heavily into music. I've been playing
                            the
                            upright
                            bass since 4th grade and I just recently got into DJing. I enjoy everything from classical and
                            jazz
                            to
                            club/house music. You'll never catch me not listening to music and looking for some new tunes to
                            jam
                            to.
                        </p>

                    </div>
                    <Cards />
                </div>
            </div>
        </section>
    )
}

export default Header;