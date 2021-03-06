import React from 'react';

import project1 from '../images/JATE-Pic.jpg';
import project2 from '../images/Coffee:Book-Pic.jpg';
import project3 from '../images/Password_Gen_Pic.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

function projects() {

    const handleBackground = (e) => {
        const background = document.getElementById('projects');
        if (e.target.id === 'item1'){
            background.classList.remove('coffeeBackDrop')
            background.classList.remove('passwordBackDrop')
            background.classList.add('carBackDrop')
        }
        else if (e.target.id === 'item2'){
            background.classList.remove('carBackDrop')
            background.classList.remove('passwordBackDrop')
            background.classList.add('coffeeBackDrop')
        }
        else if (e.target.id === 'item3'){
            background.classList.remove('carBackDrop')
            background.classList.remove('coffeeBackDrop')
            background.classList.add('passwordBackDrop')
        }
    }
    
    //Need to figure how to change the background onClick for each project
    //Change onclick to onClick and make it an object

    return (
        <section className="projectSection carbackdrop" id="projects">
            <div className="container">
                <input type="radio" name="slider" id="item1" onClick={handleBackground} defaultChecked></input>
                <input type="radio" name="slider" id="item2" onClick={handleBackground} defaultChecked></input>
                <input type="radio" name="slider" id="item3" onClick={handleBackground} defaultChecked></input>
                <div className="cards">
                    <label className="card" htmlFor="item1" id="project1">
                        <img
                            src={project1} alt={project1}></img>
                    </label>
                    <label className="card" htmlFor="item2" id="project2">
                        <img
                            src={project2} alt={project2}></img>
                    </label>
                    <label className="card" htmlFor="item3" id="project3">
                        <img
                            src={project3} alt={project3}></img>
                    </label>
                </div>
                <div className="infoContainer" id="infoContainer">
                    <div className="upperpart">
                        <div className="infoarea" id="test">
                            <label className="projectinfo" id="projectinfo1">
                                <div className="title">PWA Text Editor</div>
                                <div className="subline">
                                    <div className="liveLink"><a href="https://fierce-castle-22192.herokuapp.com/"
                                        target="_blank" rel="noreferrer">Live Link Here</a></div>
                                    <a className="githubIcon" href="https://github.com/Noah8863/PWA-Text-Editor" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                                </div>
                            </label>
                            <label className="projectinfo" id="projectinfo2">
                                <div className="title">Coffee and Book Finder</div>
                                <div className="subline">
                                    <div className="liveLink"><a href="https://noah8863.github.io/Coffee-and-Book-Finder/"
                                        target="_blank" rel="noreferrer">Live Link Here</a></div>
                                    <a className="githubIcon" href="https://github.com/Noah8863/Coffee-and-Book-Finder"
                                        target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                                </div>
                            </label>
                            <label className="projectinfo" id="projectinfo3">
                                <div className="title">Password Generator</div>
                                <div className="subline">
                                    <div className="liveLink"><a href="https://noah8863.github.io/Password-Generator/"
                                        target="_blank" rel="noreferrer">Live Link Here</a></div>
                                    <a className="githubIcon" href="https://github.com/Noah8863/Password-Generator"
                                        target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default projects;