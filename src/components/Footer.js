import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';

const links = [
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/noah.stack.16/',
        id: 'facebook',
        icon: function () {
            return <FacebookIcon />
        }
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/noah8863/',
        id: 'instagram',
        icon: function () {
            return <InstagramIcon />
        }
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/stacknoah99',
        id: 'twitter',
        icon: function () {
            return <TwitterIcon />
        }
    },
    {
        name: 'GitHub',
        link: 'https://github.com/Noah8863',
        id: 'github',
        icon: function () {
            return <GitHubIcon />
        }
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/noah-hoffman-9975a7121/',
        id: 'linkedin',
        icon: function () {
            return <LinkedInIcon />
        }
    },
    {
        name: 'Resume',
        link: '../resume/resume.pdf',
        id: 'resume',
        icon: function () {
            return <PersonIcon />
        }
    }
]



export default function Footer() {
    return (
        <section id="contact">
            <div id="contact-info">
                {/* Mapping over all the different icons/links and creating an anchor tag and inserting the different object values */}
                <ul className="wrapper">
                    {links.map((link) => (
                        <a key={link.id} href={link.link} target="_blank" rel="noreferrer" style={{color:"white"}}>
                            <li className={`icon ${link.id}`}>
                                <span className="tooltip">
                                    {link.name}
                                </span>
                                <span>
                                    {link.icon()}
                                </span>
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </section>
    )
}

