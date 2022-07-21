import React from 'react';
import NavBar from './NavBar'
import profilePicture from '../images/Profile-Picture.png';

export default function contact() {

    const handleSubmit = event => {
        event.preventDefault();
        alert("Form successfully submitted!")
    }

    return (
        <div className="landingPageSection">
            <NavBar />
            <img src={profilePicture} id='avatarPicture' />
            <main className="contactPage">
                <form onSubmit={handleSubmit}>
                    <div className="row inputContainer">
                        <div className="colxs12">
                            <div className="styledInput wide">
                                <input type="text" required />
                                <label>Name</label>
                            </div>
                        </div>
                        <div className="colmd6 colsm12">
                            <div className="styledInput wide">
                                <input type="text" required />
                                <label>Email</label>
                            </div>
                        </div>
                        <div className="colmd6 colsm12">
                            <div className="styledInput wide">
                                <input type="text" required />
                                <label>Phone Number</label>
                            </div>
                        </div>
                        <div className="colxs12">
                            <div className="styledInput wide">
                                <textarea required></textarea>
                                <label>Message</label>
                            </div>
                        </div>
                        <div className="colxs12">
                            <button className="btnlrg submitbtn">Send Message</button>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}