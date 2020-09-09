import React from "react"

import email from '../images/icons/mail.svg';
import cv from '../images/icons/document.svg';
import linkedin from '../images/icons/linkedin.svg';

const Contact = () => (
    <div className="contact" id="contact">
        <div className="contact__container">
            <h2 className="contact__container__header">Contact</h2>
            <div className="contact__container__box">
                <div className="contact__container__box__text">
                    <span className="contact__container__box__text__sub-heading">Let's Make Something Great Together</span>
                    <div className="contact__container__box__text__description">
                    <p>I'm always on the lookout for oppertunities to work on exciting projects. If you have a role or job that you feel I'd be suited to, please don't hesitate to contact me.</p>
                    <p>I typically respond to all messages within 24 hours</p>
                    </div>
                </div>

                <div className="contact__container__box__info">
                    <a className="contact__container__box__info__email" href="mailto:timothy.david.new@hotmail.co.uk">
                        <div className="contact__container__box__info--email">
                            <img className="contact__container__box__info--email__image" src={email}/>
                            <div className="contact__container__box__info--email--text-box">
                            <a href="mailto:timothy.david.new@hotmail.co.uk">
                                timothy.david.new@hotmail.co.uk
                            </a>
                            </div>
                        </div>
                    </a>
                    <a className="contact__container__box__info--linkedin" href="https://www.linkedin.com/in/tim-new-52393317b/">
                        <div className="contact__container__box__info--linkedin">
                            <img className="contact__container__box__info--linkedin__image" src={linkedin}/>
                        </div>
                        <div className="contact__container__box__info--linkedin--text-box">
                            <a href="https://www.linkedin.com/in/tim-new-52393317b/">
                                linkedin.com/in/tim-new-52393317b
                            </a>
                        </div>
                    </a>
                    <a className="contact__container__box__info--cv" href="TimothyNewCV.docx">
                        <div className="contact__container__box__info--cv">
                            <img className="contact__container__box__info--cv__image" src={cv}/>
                        </div>
                        <div className="contact__container__box__info--cv--text-box">
                            Click here to download a copy of my CV
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default Contact 
