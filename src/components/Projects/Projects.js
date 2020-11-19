import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div className="projects__container">
            <h1>Projects</h1>
            <div className="project-card">
                <div className="meta">
                    <div className="photo" style={{backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)'}}></div>
                </div>
                <div className="description">
                    <h1>Learning to Code</h1>
                    <div className="project__tech">
                        <span className="badge badge--info">HTML5</span>
                        <span className="badge badge--info">CSS3</span>
                        <span className="badge badge--info">React</span>
                    </div>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                    <p className="read-more">
                        <a href="#">Read More</a>
                    </p>
                </div>
            </div>
            <div className="project-card alt">
                <div className="meta">
                    <div className="photo" style={{backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)'}}></div>
                </div>
                <div className="description">
                    <h1>Mastering the Language</h1>
                    <h2>Java is not the same as JavaScript</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                    <p className="read-more">
                        <a href="#">Read More</a>
                    </p>
                </div>
            </div>
            <div className="project-card">
                <div className="meta">
                    <div className="photo" style={{backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)'}}></div>
                </div>
                <div className="description">
                    <h1>Learning to Code</h1>
                    <h2>Opening a door to the future</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                    <p className="read-more">
                        <a href="#">Read More</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects
