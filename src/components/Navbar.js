import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'

export default function NavBar() {

    const handleClick = () => {
        // scroll-snap-align: start;
        const sections = document.querySelectorAll("section")
        sections.forEach((section) => {
            section.style.scrollSnapAlign = 'none';
        })
    }
    return (
        <div className="topnav" id="particlesJs">
            <div className="topnav-left">
                <a href="https://www.theverge.com/tech" target="_blank" rel="noreferrer" alt="https://www.theverge.com/tech">News</a>
                {/* <a href="#contact">Social Media</a> */}
                <HashLink to="/#contact" onClick={handleClick} smooth>Social Media</HashLink>
            </div>
            <div className="topnav-right">
                <Link to="/contact">Contact</Link>
                <Link to="/">Home</Link>
            </div>
        </div>
        
    )
}

