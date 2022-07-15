import React from 'react';


const links = [
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/noah.stack.16/',
        id: 'facebook',
        icon: 'fab fa-facebook-f'
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/noah8863/',
        id: 'instagram',
        icon: 'fab fa-instagram'
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/stacknoah99',
        id: 'twitter',
        icon: 'fab fa-twitter'
    },
    {
        name: 'GitHub',
        link: 'https://github.com/Noah8863',
        id: 'github',
        icon: 'fab fa-github'
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/noah-hoffman-9975a7121/',
        id: 'linkedin',
        icon: 'fa-brands fa-linkedin'
    },
    {
        name: 'Resume',
        link: '../resume/resume.pdf',
        id: 'resume',
        icon: 'fa-solid fa-circle-user'
    }
]



export default function Footer() {
    return (
        <section id="contact">
            <div id="contact-info">

                <ul className="wrapper">
                    {links.map((link) => (
                        <a href={link.link} target="_blank" rel="noreferrer" style={{color:"white"}}>
                            <li className={`icon ${link.id}`}>
                                <span className="tooltip">
                                    {link.name}
                                </span>
                                <span>
                                    <i className={link.icon}></i>
                                </span>
                            </li>
                        </a>
                        
                    ))}
                    {/* <a href="https://www.facebook.com/noah.stack.16/" target="_blank" rel="noreferrer" style={{color:"white"}}>
                        <li className="icon facebook">
                            <span className="tooltip">Facebook</span>
                            <span><i className="fab fa-facebook-f"></i></span>
                        </li>
                    </a>

                    <a href="https://www.instagram.com/noah8863/" target="_blank" rel="noreferrer" style={{color:"white"}}>
                        <li className="icon instagram">
                            <span clasName="tooltip">Instagram</span>
                            <span><i className="fab fa-instagram"></i></span>
                        </li>
                    </a>

                    <a href="https://twitter.com/stacknoah99" target="_blank" rel="noreferrer" style={{color:"white"}}>
                        <li className="icon twitter">
                            <span className="tooltip">Twitter</span>
                            <span><i className="fab fa-twitter"></i></span>
                        </li>
                    </a>

                    <a href="https://github.com/Noah8863" target="_blank" rel="noreferrer" style={{color:"white"}}>
                        <li className="icon github">
                            <span className="tooltip">GitHub</span>
                            <span><i className="fab fa-github"></i></span>
                        </li>
                    </a>

                    <a href="https://www.linkedin.com/in/noah-hoffman-9975a7121/" rel="noreferrer" target="_blank" style={{color:"white"}}>
                        <li className="icon linkedin">
                            <span className="tooltip">LinkedIn</span>
                            <span><i className="fa-brands fa-linkedin"></i></span>
                        </li>
                    </a> */}

                    {/* <a href="./files/resume/resume.pdf" target="_blank" rel="noreferrer" style="color: white;">
                        <li className="icon resume">
                            <span className="tooltip">Resume</span>
                            <span><i className="fa-solid fa-circle-user"></i></span>
                        </li>
                    </a> */}

                </ul>
            </div>
        </section>
    )
}

