import React from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SchoolIcon from '@mui/icons-material/School';


const handleToggle = (e) => {
    console.log(e.target)
    
    if (e.target.classList.contains('ArrowDown')){
        e.target.parentNode.parentNode.nextElementSibling.classList.toggle('hide');
    } else {
        e.target.parentNode.parentNode.parentNode.nextElementSibling.classList.toggle('hide');
    }
}

function Cards() {
    return (
        <div>
            <div className="tile flipCardInner" id="aboutMeCard">
                <div className="flipCard">
                    <div className="flipCardInner">
                        <div className="flipCardFront">
                            <div id="topExperinceCard">
                                <h2>Education {'\n'}
                                    <SchoolIcon />
                                </h2>
                            </div>
                            <div id="experinceTriangleShape"></div>
                            <KeyboardDoubleArrowRightIcon className='faAnglesRight'/>
                        </div>
                        <div className="flipCardBack">
                            <h2>Arvada High School {'\n'}
                            <button ><ArrowDropDownIcon onClick={handleToggle} className="ArrowDown" /></button>
                            </h2>
                            <p className="hide" id="highschool">
                                <p>2014 - 2018</p> {'\n'}
                                <p>High School diploma</p> {'\n'}
                                {/* <a href="https://www.google.com/maps/place/Arvada+Senior+High+School/@39.8153749,-105.0870128,17z/data=!3m1!4b1!4m5!3m4!1s0x876b888f4d8c4d37:0xd3c54e085ad8cd95!8m2!3d39.8153749!4d-105.0848241" target="_blank" rel="noreferrer"> 7951 W 65th Ave, Arvada, CO 80004 </a> */}
                            </p>

                            <h2>University Of California Davis
                            <button ><ArrowDropDownIcon onClick={handleToggle} className="ArrowDown" /></button>
                            </h2>
                            <p className="hide" id="college">
                                <p>2018 - 2019</p> {'\n'}
                                <p>Computer Engineering</p>
                                {/* <a href="https://www.google.com/maps/place/University+of+California,+Davis/@38.5382322,-121.7639012,17z/data=!3m1!4b1!4m5!3m4!1s0x80ead37f7489fa3f:0xecbfbb24087e8334!8m2!3d38.5382322!4d-121.7617125" target="_blank" rel="noreferrer">1 Shields Ave, Davis, CA 95616</a> */}
                            </p>

                            <h2>Denver University Bootcamp
                                <button ><ArrowDropDownIcon onClick={handleToggle} className="ArrowDown" /></button>
                            </h2>
                            <p className="hide" id="bootcamp">
                                <p>Feb. 2022 - Aug. 2022</p> {'\n'}
                                <p>Full Stack Web Developer</p>
                                {/* <a href="https://www.google.com/maps/place/University+of+Denver/@39.6766174,-104.9640852,17z/data=!3m1!4b1!4m5!3m4!1s0x876c7e159cdea761:0x7198a721c70f27d9!8m2!3d39.6766174!4d-104.9618965" target="_blank" rel="noreferrer">2199 S University Blvd, Denver, CO 80208</a> */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tile flipCardInner" id="experinceCard">
                <div className="flipCard">
                    <div className="flipCardInner">
                        <div className="flipCardFront">
                            <div id="topExperinceCard">
                                <h2>Skills {'\n'}
                                    <PsychologyIcon />
                                </h2>
                            </div>
                            <div id="experinceTriangleShape"></div>
                            <KeyboardDoubleArrowRightIcon className='faAnglesRight'/>
                        </div>

                        <div className="flipCardBack">
                            <h2>Front End {'\n'}
                                <button ><ArrowDropDownIcon onClick={handleToggle} className="ArrowDown" /></button>
                            </h2>
                            <p className="hide" id="observinfo">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS/SCSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                </ul>
                            </p>

                            <h2>Back End
                            <button ><ArrowDropDownIcon onClick={handleToggle} className="ArrowDown" /></button>
                            </h2>
                            <p className="hide" id="bestbuyinfo">
                                <ul>
                                    <li>Node.JS</li>
                                    <li>Express</li>
                                    <li>SQL/noSQL</li>
                                    <li>MonogoDB</li>
                                    <li>Mongoose</li>
                                    <li>MVC Framework</li>
                                    <li>GraphQL</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;