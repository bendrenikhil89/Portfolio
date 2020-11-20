import React from 'react';
import './About.css';
import Skills from './Skills/Skills';

const About = () => {
    return (
        <>
            <section id="about" className="about">
                <div className="about__container">
                    <div className="about__section-title">
                    <h1>About</h1>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="about__row">
                    <div className="about__col-lg-4 about__aos-init about__aos-animate about__pt-4" data-aos="about__fade-right">
                        <div className="about__img-fluid"></div>
                    </div>
                        <div className="about__col-lg-8 about__pt-4 about__pt-lg-0 about__content about__aos-init about__aos-animate" data-aos="about__fade-left">
                            <h3>UI/UX Designer &amp; Web Developer.</h3>
                            <p className="about__font-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                            </p>
                            <div className="about__row">
                            <div className="about__col-lg-6">
                                <ul>
                                <li><i className="fas fa-chevron-right"></i> <strong>Birthday:&nbsp;</strong> 1 May 1995</li>
                                <li><i className="fas fa-chevron-right"></i> <strong>Website:&nbsp;</strong> www.example.com</li>
                                <li><i className="fas fa-chevron-right"></i> <strong>Phone:&nbsp;</strong> +123 456 7890</li>
                                <li><i className="fas fa-chevron-right"></i> <strong>City:&nbsp;</strong> City : New York, USA</li>
                                </ul>
                            </div>
                            <div className="about__col-lg-6">
                                <ul>
                                <li><i className="fas fa-chevron-right"></i> <strong>Age:&nbsp;</strong> 30</li>
                                <li><i className="fas fa-chevron-right"></i> <strong>Degree:&nbsp;</strong> Master</li>
                                <li><i className="fas fa-chevron-right"></i> <strong>PhEmailone:&nbsp;</strong> email@example.com</li>
                                <li><i className="fas fa-chevron-right"></i> <strong>Freelance:&nbsp;</strong> Available</li>
                                </ul>
                            </div>
                            </div>
                            <p>
                            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                            </p>
                        </div>
                    </div>
                </div>
                <Skills />
            </section>
            
        </>
    )
}

export default About;
