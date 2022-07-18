import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const element = <FontAwesomeIcon icon={ faGithub } />


const links = [
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/noah.stack.16/',
        id: 'facebook',
        icon: 'fab fa-facebook'
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
                {/* Mapping over all the different icons/links and creating an anchor tag and inserting the different object values */}
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
                </ul>
            </div>
        </section>
    )
}

