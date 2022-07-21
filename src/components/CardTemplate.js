import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const handleToggle = (e) => {
    if (e.target.className.contains('ArrowDown')){
        e.target.parentNode.parentNode.nextElementSibling.classList.remove('hide');
    } else {
        e.target.parentNode.nextElementSibling.classList.remove('hide');
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
                                <h2>Education
                                    <i className="fa-solid fa-graduation-cap"></i>
                                    
                                </h2>
                            </div>
                            <div id="experinceTriangleShape"></div>
                            <KeyboardDoubleArrowRightIcon className='faAnglesRight'/>
                        </div>
                        <div className="flipCardBack">
                            <h2>Arvada High School
                                <button onClick={handleToggle}><ArrowDownwardIcon className="ArrowDown" /></button>
                            </h2>
                            <p className="hide" id="highschool">
                                2014 - 2018
                                High School diploma
                                <a href="https://www.google.com/maps/place/Arvada+Senior+High+School/@39.8153749,-105.0870128,17z/data=!3m1!4b1!4m5!3m4!1s0x876b888f4d8c4d37:0xd3c54e085ad8cd95!8m2!3d39.8153749!4d-105.0848241" target="_blank" rel="noreferrer"> 7951 W 65th Ave, Arvada, CO 80004 </a>
                            </p>

                            <h2>University Of California Davis
                                <button onClick={handleToggle}><ArrowDownwardIcon  className="ArrowDown"/> </button>
                            </h2>
                            <p className="hide" id="college">
                                2018 - 2019
                                Computer Engineering
                                <a href="https://www.google.com/maps/place/University+of+California,+Davis/@38.5382322,-121.7639012,17z/data=!3m1!4b1!4m5!3m4!1s0x80ead37f7489fa3f:0xecbfbb24087e8334!8m2!3d38.5382322!4d-121.7617125" target="_blank" rel="noreferrer">1 Shields Ave, Davis, CA 95616</a>
                            </p>

                            <h2>Denver University Bootcamp
                                <button onClick={handleToggle}><ArrowDownwardIcon className="ArrowDown" /></button>
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
            <div className="tile flipCardInner" id="experinceCard">
                <div className="flipCard">
                    <div className="flipCardInner">
                        <div className="flipCardFront">
                            <div id="topExperinceCard">
                                <h2>Experince
                                    <i className="fa-solid fa-user-gear"></i>
                                </h2>
                            </div>
                            <div id="experinceTriangleShape"></div>
                            <KeyboardDoubleArrowRightIcon className='faAnglesRight'/>
                        </div>

                        <div className="flipCardBack">
                            <h2>Observ Inc
                                <button onClick={handleToggle}><ArrowDownwardIcon className="ArrowDown"/></button>
                            </h2>
                            <p className="hide" id="observinfo">
                                Funnel Cake Concessions Worker
                                2016 - 2018
                                4333 Cherokee St, Denver, CO 80216
                            </p>

                            <h2>Best Buy
                                <button onClick={handleToggle}><ArrowDownwardIcon className="ArrowDown" /></button>
                            </h2>
                            <p className="hide" id="bestbuyinfo">
                                Verizon Sales Specialists
                                2019 - 2021
                                104 W 104th Ave, Denver, CO 80234
                            </p>

                            <h2>Verizon
                                <button onClick={handleToggle}><ArrowDownwardIcon className="ArrowDown"/></button>
                            </h2>
                            <p className="hide" id="verizoninfo">
                                Verizon Sales Assoiciate
                                Jan. 2022 - April. 2022
                                8461 S Yosemite St Ste 101, Lone Tree, CO 80124
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;