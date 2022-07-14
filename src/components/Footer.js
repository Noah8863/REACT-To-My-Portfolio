import React from 'react';

export default function Footer() {
    return (
        <section id="contact">
            <div id="contact-info">

                <ul className="wrapper">
                    <a href="https://www.facebook.com/noah.stack.16/" target="_blank" style="color: white;">
                        <li className="icon facebook">
                            <span className="tooltip">Facebook</span>
                            <span><i className="fab fa-facebook-f"></i></span>
                        </li>
                    </a>

                    <a href="https://www.instagram.com/noah8863/" target="_blank" style="color: white;">
                        <li className="icon instagram">
                            <span clasNames="tooltip">Instagram</span>
                            <span><i className="fab fa-instagram"></i></span>
                        </li>
                    </a>

                    <a href="https://twitter.com/stacknoah99" target="_blank" style="color: white;">
                        <li className="icon twitter">
                            <span className="tooltip">Twitter</span>
                            <span><i className="fab fa-twitter"></i></span>
                        </li>
                    </a>

                    <a href="https://github.com/Noah8863" target="_blank" style="color: white;">
                        <li className="icon github">
                            <span className="tooltip">GitHub</span>
                            <span><i className="fab fa-github"></i></span>
                        </li>
                    </a>

                    <a href="https://www.linkedin.com/in/noah-hoffman-9975a7121/" target="_blank" style="color: white;">
                        <li className="icon linkedin">
                            <span className="tooltip">LinkedIn</span>
                            <span><i className="fa-brands fa-linkedin"></i></span>
                        </li>
                    </a>

                    <a href="./files/resume/resume.pdf" target="_blank" style="color: white;">
                        <li className="icon resume">
                            <span className="tooltip">Resume</span>
                            <span><i className="fa-solid fa-circle-user"></i></span>
                        </li>
                    </a>

                </ul>
            </div>
        </section>
    )
}