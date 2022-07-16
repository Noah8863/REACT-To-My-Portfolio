import React from 'react';

function CardTemplate() {
    return (
        <div className="tile flip-card-inner" id="aboutMeCard">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div id="topExperinceCard">
                            <h2>Education
                                <i className="fa-solid fa-graduation-cap"></i>
                            </h2>
                        </div>
                        <div id="experinceTriangleShape"></div>
                        <i className="fa-solid fa-angles-right"></i>
                    </div>
                    <div className="flip-card-back">
                        <h2>Arvada High School
                            <button><i className="fa-solid fa-caret-down"></i></button>
                        </h2>
                        <p className="hide" id="highschool">
                            2014 - 2018
                            High School diploma
                            <a href="https://www.google.com/maps/place/Arvada+Senior+High+School/@39.8153749,-105.0870128,17z/data=!3m1!4b1!4m5!3m4!1s0x876b888f4d8c4d37:0xd3c54e085ad8cd95!8m2!3d39.8153749!4d-105.0848241" target="_blank" rel="noreferrer"> 7951 W 65th Ave, Arvada, CO 80004 </a>
                        </p>

                        <h2>University Of California Davis
                            <button><i className="fa-solid fa-caret-down"></i></button>
                        </h2>
                        <p className="hide" id="college">
                            2018 - 2019
                            Computer Engineering
                            <a href="https://www.google.com/maps/place/University+of+California,+Davis/@38.5382322,-121.7639012,17z/data=!3m1!4b1!4m5!3m4!1s0x80ead37f7489fa3f:0xecbfbb24087e8334!8m2!3d38.5382322!4d-121.7617125" target="_blank" rel="noreferrer">1 Shields Ave, Davis, CA 95616</a>
                        </p>

                        <h2>Denver University Bootcamp
                            <button><i className="fa-solid fa-caret-down"></i></button>
                        </h2>
                        <p className="hide" id="bootcamp">
                            Feb. 2022 - Aug. 2022
                            Full Stack Web Developer
                            <a href="https://www.google.com/maps/place/University+of+Denver/@39.6766174,-104.9640852,17z/data=!3m1!4b1!4m5!3m4!1s0x876c7e159cdea761:0x7198a721c70f27d9!8m2!3d39.6766174!4d-104.9618965" target="_blank" rel="noreferrer">2199 S University Blvd, Denver, CO 80208</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTemplate;