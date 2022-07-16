import React from 'react';
import project1 from '../images/JATE-Pic.jpg';
import project2 from '../images/Coffee:Book-Pic.jpg';
import project3 from '../images/Password_Gen_Pic.png'


function projects() {
    return (
        <section className="projectSection car-back-drop" id="projects">
            <div class="container">
                <input type="radio" name="slider" id="item-1" onclick="parking()" checked></input>
                <input type="radio" name="slider" id="item-2" onclick="coffee()" ></input>
                <input type="radio" name="slider" id="item-3" onclick="password()"></input>
                <div className="cards">
                    <label className="card" for="item-1" id="project-1">
                        <img
                            src={project1}></img>
                    </label>
                    <label className="card" for="item-2" id="project-2">
                        <img
                            src={project2}></img>
                    </label>
                    <label className="card" for="item-3" id="project-3">
                        <img
                            src={project3}></img>
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
                                    <a className="githubIcon" href="https://github.com/Noah8863/PWA-Text-Editor" target="_blank" rel="noreferrer"><i
                                        className="fa-brands fa-github"></i></a>
                                </div>
                            </label>
                            <label className="project-info" id="project-info-2">
                                <div className="title">Coffee and Book Finder</div>
                                <div className="sub-line">
                                    <div className="liveLink"><a href="https://noah8863.github.io/Coffee-and-Book-Finder/"
                                        target="_blank" rel="noreferrer">Live Link Here</a></div>
                                    <a className="githubIcon" href="https://github.com/Noah8863/Coffee-and-Book-Finder"
                                        target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                                </div>
                            </label>
                            <label className="project-info" id="project-info-3">
                                <div className="title">Password Generator</div>
                                <div className="sub-line">
                                    <div className="liveLink"><a href="https://noah8863.github.io/Password-Generator/"
                                        target="_blank" rel="noreferrer">Live Link Here</a></div>
                                    <a className="githubIcon" href="https://github.com/Noah8863/Password-Generator"
                                        target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
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