import React, {useState} from 'react';
import './Contact.css';
import {Validations} from './Validations';
import emailjs from 'emailjs-com';
import Modal from 'react-modal';

Modal.setAppElement("#root");
function Contact() {
    const [msgDetails, setMsgDetails] = useState({name:'', email:'', subject:'', message: ''});
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState({});

    const msgDetailsChangeHandler = (e) => {
        if(e.target.name === "name"){
            setMsgDetails({
                ...msgDetails,
                name: e.target.value
            })
        }
        if(e.target.name === "email"){
            setMsgDetails({
                ...msgDetails,
                email: e.target.value
            })
        }
        if(e.target.name === "subject"){
            setMsgDetails({
                ...msgDetails,
                subject: e.target.value
            })
        }
        if(e.target.name === "message"){
            setMsgDetails({
                ...msgDetails,
                message: e.target.value
            })
        }
    }

    function sendEmail(e) {
        e.preventDefault();
        let error = Validations(msgDetails);
        setError(error);
        if(Object.keys(error).length === 0 && error.constructor === Object){
            setSubmitting(true);
            emailjs.sendForm('service_z5032cf', 'template_rduldan', e.target, 'user_0ZvDDR3883KJe6jf8P7He')
            .then((result) => {
                setSubmitting(false);
                document.querySelectorAll("#name, #email, #subject, #message").forEach(x => x.value="");
            }, (error) => {
                console.log(error.text);
            });
        }
      }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
        <Modal 
            isOpen={submitting} 
            onRequestClose={() => setSubmitting(false)}
            style={{
                overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#f8f8f8'
                },
                content: {
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                border: '1px solid #ccc',
                background: '#8bc540',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '10px',
                height: 'fit-content',
                width: 'fit-content',
                margin: 'auto',
                color:'white'
                }
            }}
          >
            <p>Your message has been received.</p>
        </Modal>
        <div className="contact-wrapper">
            <h1>Contact</h1>
        
            <div className="contact__container">
                <div className="contact__msg-details">
                    <h2>Send Message</h2>
                    <div className="contact__name">
                        <input type="text" name="name" className="contact__form-control" id="name" placeholder="Your Name" value={msgDetails.name} onChange={msgDetailsChangeHandler} />
                        {error && error.name ? <span className="contact__validation-error">* Username required</span> : null}
                    </div>
                    <div className="contact__email">
                        <input type="text" name="email" className="contact__form-control" id="email" placeholder="Your Email" value={msgDetails.email} onChange={msgDetailsChangeHandler} />
                        {error && error.email ? <span className="contact__validation-error">* Email required</span> : null}
                        {error && error.emailPattern ? <span className="contact__validation-error">* Email invalid</span> : null}
                    </div>
                    <div className="contact__subject">
                        <input type="text" name="subject" className="contact__form-control" id="subject" placeholder="Subject" value={msgDetails.subject} onChange={msgDetailsChangeHandler} />
                        {error && error.subject ? <span className="contact__validation-error">* Subject required</span> : null}
                    </div>
                    <div className="contact__message">
                        <textarea className="contact__form-control" name="message" id="message" rows="6" placeholder="Message" value={msgDetails.message} onChange={msgDetailsChangeHandler}></textarea>
                        {error && error.message ? <span className="contact__validation-error">* Message required</span> : null}
                    </div>
                    <div className="contact__submit">
                        <input type="submit" className="contact__send-message" value="Send Message" />
                    </div>
                </div>
                <div className="contact__contact-details">
                    <h2>Get in Touch</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore?</p>
                    <div className="contact__metadata">
                        <p><i className="fas fa-map-marker-alt"></i>E-302, Poorva Residency, Pimple Saudagar, Pune</p>
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
        </form>
    )
}

export default Contact;
