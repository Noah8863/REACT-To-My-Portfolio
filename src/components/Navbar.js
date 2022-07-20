import React from 'react';

export default function NavBar() {
    return (
        <header className="topnav">
            <div className="topnav-left">
                <a href="https://www.theverge.com/tech" target="_blank" rel="noreferrer" alt="https://www.theverge.com/tech">News</a>
                <a>Social Media</a>
            </div>
            <div className="topnav-right">
                {/* <Link to="#projects" rel="noreferrer" >Projects</Link> */}
            </div>
        </header>
    )
}

