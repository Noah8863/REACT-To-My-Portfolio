import React, { useRef } from 'react';
import NavBar from './NavBar'
import profilePicture from '../images/Profile-Picture.png';
import emailjs from '@emailjs/browser';

export default function Contact() {
    // Sending form to email 
    

    const sendEmail = (e) => {
        e.preventDefault();
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phoneNumber: document.getElementById('phoneNumber').value,
            message: document.getElementById('message').value
        }
        console.log(formData);
        emailjs.send("service_32wky28","template_6f7vqrr", formData, 'nIOQ4DjOD6VPrQRy0')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    }


    return (
        <div className="landingPageSection">
            <NavBar />
            <img src={profilePicture} id='avatarPicture' alt="avatar" />

            <main className="contactPage">
                <form onSubmit={sendEmail}>
                    <div className="row inputContainer">
                        <div className="colxs12">
                            <div className="styledInput wide">
                                <input type="text" name="name" required id="name"/>
                                <label>Name</label>
                            </div>
                        </div>
                        <div className="colmd6 colsm12">
                            <div className="styledInput wide">
                                <input type="text" name="email" required id="email" />
                                <label type="email">Email</label>
                            </div>
                        </div>
                        <div className="colmd6 colsm12">
                            <div className="styledInput wide">
                                <input type="number" name="phoneNumber" required  id="phoneNumber"/>
                                <label>Phone Number</label>
                            </div>
                        </div>
                        <div className="colxs12">
                            <div className="styledInput wide">
                                <textarea required name="message" type="text" id="message"></textarea>
                                <label>Message</label>
                            </div>
                        </div>
                        <div className="colxs12">
                            <button type="submit" className="btnlrg submitbtn">Send Message</button>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}