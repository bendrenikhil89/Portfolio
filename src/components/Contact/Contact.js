import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-wrapper">
            <h1>Contact</h1>
        
            <div className="contact__container">
                <div className="contact__msg-details">
                    <h2>Send Message</h2>
                    <div className="contact__name">
                        <input type="text" name="name" className="contact__form-control" id="name" placeholder="Your Name" />
                    </div>
                    <div className="contact__email">
                        <input type="text" name="email" className="contact__form-control" id="email" placeholder="Your Email" />
                    </div>
                    <div className="contact__subject">
                        <input type="text" name="subject" className="contact__form-control" id="subject" placeholder="Subject" />
                    </div>
                    <div className="contact__message">
                    <textarea className="contact__form-control" name="message" id="message" rows="6" placeholder="Message"></textarea>
                    </div>
                </div>
                <div className="contact__contact-details">
                    <h2>Get in Touch</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore?</p>
                    <div className="contact__metadata">
                        <p><i className="fas fa-map-marker-alt"></i>329 WASHINGTON ST BOSTON, MA 02108</p>
                        <p><i className="fas fa-phone"></i>+91 96735 81881</p>
                        <p><i className="fas fa-envelope"></i>bendre.nikhil.89@gmail.com</p>
                    </div>
                    <div className="social-buttons">
                        <a href="https://www.linkedin.com/in/nikhil-bendre-529939104/" className="social-margin" target="blank">
                        <div className="social-icon linkedin">
                            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                        </div> 
                        </a>
                        <a href="https://github.com/bendrenikhil89"  target="blank"  className="social-margin">
                        <div className="social-icon github">
                            <i className="fab fa-github" aria-hidden="true"></i>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
