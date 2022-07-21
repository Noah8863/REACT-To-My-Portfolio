import React, { useRef } from 'react';
import NavBar from './NavBar'
import profilePicture from '../images/Profile-Picture.png';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send('service_32wky28', 'template_6f7vqrr', form.current, 'nIOQ4DjOD6VPrQRy0')
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
                <form ref={form} onSubmit={sendEmail}>
                    <div className="row inputContainer">
                        <div className="colxs12">
                            <div className="styledInput wide">
                                <input type="text" name="from_name" required />
                                <label>Name</label>
                            </div>
                        </div>
                        <div className="colmd6 colsm12">
                            <div className="styledInput wide">
                                <input type="text" required />
                                <label type="email" name="email">Email</label>
                            </div>
                        </div>
                        <div className="colmd6 colsm12">
                            <div className="styledInput wide">
                                <input type="number" name="phoneNumber" required />
                                <label>Phone Number</label>
                            </div>
                        </div>
                        <div className="colxs12">
                            <div className="styledInput wide">
                                <textarea required name="message"></textarea>
                                <label>Message</label>
                            </div>
                        </div>
                        <div className="colxs12">
                            <button type="submit" value="Send" className="btnlrg submitbtn">Send Message</button>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}