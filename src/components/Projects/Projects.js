import React from 'react';
import Project from './Project/Project';

const Projects = () => {
    return (
        <div className="projects__container" style={{height:"100%"}}>
            <h1>Projects</h1>
            <Project 
                cardClass='project__project-card' 
                projectImgURL='https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg' 
                techNameArr={['HTML5', 'CSS3', 'React']} 
                projectTitle="Project Title 1" 
                projectDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
                projectDetails={['#','https://www.google.com']} 
            />
            <Project 
                cardClass='project__project-card alt' 
                projectImgURL='https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg' 
                techNameArr={['HTML5', 'CSS3', 'Redux']} 
                projectTitle="Project Title 2" 
                projectDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
                projectDetails={['#','https://www.msn.com']}  
            />
        </div>
    )
}

export default Projects;
