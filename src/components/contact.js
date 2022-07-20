import React from 'react';

export default function contact() {

    const handleSubmit = event => {
        event.preventDefault();
        alert('You have submitted the form.')
    }

    return (
        <main className="contactPage" id='particlesJs'>
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
    )
}