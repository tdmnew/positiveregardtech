import React from "react"

import reactIcon from '../images/icons/reactjs-icon.svg';
import sass from '../images/icons/sass-lang-icon.svg';
import graphql from '../images/icons/graphql-icon.svg';
import nodejs from '../images/icons/nodejs-icon.svg';
import digitalocean from '../images/icons/digitalocean-official.svg';
import linux from '../images/icons/linux-icon.svg';

const About = () => (
    <div className="about" id="about">
        <div className="about__container">
            <h2 className="about__container__header">About</h2>
            <div className="about__container__prt">
                <span className="about__container__prt--header">About Positive Regard Tech</span>
                <p>Humanistic psychologist Carl Rogers pioneered the concept of 'Unconditional Positive Regard' in therapy. The idea that everybody deserves a basic level of acceptance and support. <br/><br/> A psychological concept and the field of web development may sound like disparate things, but this principle informs how I work. I try to foster a great relationship with those that I work with, one built on humility and trust.</p>
            </div>

            <div className="about__container__me">
                <span className="about__container__me--header">About Me</span>
                <p>Before entering the software engineering industry, I have worked in the NHS in some way, shape or form for over five years. The lessons I learned in humility and kindness have been invaluable. I have a no compromises approach to business - transparency, hard work and terrific results.</p>
                <p>From brochure sites advertising small businesses, to full-scale web applications I've worked on numerous projects of varying scales.<br/><br/>It's all well and good having a large toolbox, but the difference comes in knowing the most appropriate tool for the job. All of my solutions are bespoke, using technologies best suited to your needs.</p>
            </div>
            <div className="about__container__skills">
                <div className="about__container__skills--frontend">
                    <span className="about__container__skills__title">Front-End Development</span>
                    <div className="about__container__skills__icons">
                        <img src={reactIcon} className="about__container__skills__icon"/>
                        <img src={sass} className="about__container__skills__icon"/>
                    </div>
                    <ul className="about__container__skills__list">
                        <li className="about__container__skills--frontend__list-item">JavaScript (Including ES2015)</li>
                        <li className="about__container__skills--frontend__list-item">React</li>
                        <li className="about__container__skills--frontend__list-item">HTML5</li>
                        <li className="about__container__skills--frontend__list-item">SASS/CSS3</li>
                    </ul>
                </div>
                <div className="about__container__skills--server">
                    <span className="about__container__skills__title">Server-Side Development</span>
                    <div className="about__container__skills__icons">
                        <img src={nodejs} className="about__container__skills__icon"/>
                        <img src={graphql} className="about__container__skills__icon"/>
                    </div>
                    <ul className="about__container__skills__list">
                        <li className="about__container__skills--server__list-item">NodeJS</li>
                        <li className="about__container__skills--server__list-item">GraphQl/Apollo</li>
                        <li className="about__container__skills--server__list-item">Express</li>
                        <li className="about__container__skills--server__list-item">MariaDB</li>
                    </ul>
                </div>
                <div className="about__container__skills--devops">
                    <span className="about__container__skills__title">DevOps</span>
                    <div className="about__container__skills__icons">
                        <img src={digitalocean} className="about__container__skills__icon"/>
                        <img src={linux} className="about__container__skills__icon"/>
                    </div>
                    <ul className="about__container__skills__list">
                        <li className="about__container__skills--devops__list-item">Digital Ocean</li>
                        <li className="about__container__skills--devops__list-item">System Administration</li>
                        <li className="about__container__skills--devops__list-item">Nginx</li>
                        <li className="about__container__skills--devops__list-item">Docker</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

export default About 
