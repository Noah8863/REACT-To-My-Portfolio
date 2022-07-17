import React from 'react';
import {useState} from 'react';
import project1 from '../images/JATE-Pic.jpg';
import project2 from '../images/Coffee:Book-Pic.jpg';
import project3 from '../images/Password_Gen_Pic.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

// const background = document.getElementById('projects')

function projects() {

    // const parking = () => {
    //     background.classList.remove('coffee-back-drop')
    //     background.classList.remove('password-back-drop')
    //     background.classList.add('car-back-drop')
    // }
    // const coffee = () => {
    //     background.classList.remove('car-back-drop')
    //     background.classList.remove('password-back-drop')
    //     background.classList.add('coffee-back-drop')
    // }
    // const password = () => {
    //     background.classList.remove('car-back-drop')
    //     background.classList.remove('coffee-back-drop')
    //     background.classList.add('password-back-drop')
    // }

    //Need to figure how to change the background onClick for each project
    //Change onclick to onClick and make it an object

    return (
        <section className="projectSection car-back-drop" id="projects">
            <div className="container">
                <input type="radio" name="slider" id="item-1" onclick='parking' checked></input>
                <input type="radio" name="slider" id="item-2" onclick='coffee' checked ></input>
                <input type="radio" name="slider" id="item-3" onclick='password' checked></input>
                <div className="cards">
                    <label className="card" for="item-1" id="project-1">
                        <img
                            src={project1} alt={project1}></img>
                    </label>
                    <label className="card" for="item-2" id="project-2">
                        <img
                            src={project2} alt={project2}></img>
                    </label>
                    <label className="card" for="item-3" id="project-3">
                        <img
                            src={project3} alt={project3}></img>
                    </label>
                </div>
                <div className="infoContainer" id="infoContainer">
                    <div className="upper-part">
                        <div className="info-area" id="test">
                            <label className="project-info" id="project-info-1">
                                <div className="title">PWA Text Editor</div>
                                <div className="sub-line">
                                    <div className="liveLink"><a href="https://fierce-castle-22192.herokuapp.com/"
                                        target="_blank" rel="noreferrer">Live Link Here</a></div>
                                    <a className="githubIcon" href="https://github.com/Noah8863/PWA-Text-Editor" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                                </div>
                            </label>
                            <label className="project-info" id="project-info-2">
                                <div className="title">Coffee and Book Finder</div>
                                <div className="sub-line">
                                    <div className="liveLink"><a href="https://noah8863.github.io/Coffee-and-Book-Finder/"
                                        target="_blank" rel="noreferrer">Live Link Here</a></div>
                                    <a className="githubIcon" href="https://github.com/Noah8863/Coffee-and-Book-Finder"
                                        target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                                </div>
                            </label>
                            <label className="project-info" id="project-info-3">
                                <div className="title">Password Generator</div>
                                <div className="sub-line">
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