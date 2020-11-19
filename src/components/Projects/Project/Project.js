import React from 'react';
import TechStackInfo from '../TechStackInfo/TechStackInfo';
import './Project.css';


const Projects = ({cardClass, projectImgURL, projectTitle, projectDesc, techNameArr, projectDetails}) => {
    let techStackInfo = techNameArr.map(techName => {
        return <TechStackInfo techName={techName} key={techName} />;
    });
    
    return (
        <>
            <div className={cardClass}>
                <div className="project__meta">
                    <div className="project__photo" style={{backgroundImage: 'url('+projectImgURL+')'}}></div>
                </div>
                <div className="project__description">
                    <h2>{projectTitle}</h2>
                    <div className="project__tech">
                        {techStackInfo}
                    </div>
                    <p>{projectDesc}</p>
                    <div className="project__wrapper">
                        <div className="project__button-container project__button-flip3d-vertical2">
                            <div className="project__flipper project__flipper-flip3d-vertical2">
                                <div className="project__button project__front">
                                    <i className="fas fa-eye"></i>
                                </div>
                                <div className="project__button project__button-3d project__back"><a target="_blank" href={projectDetails[0]}>Live</a></div>
                            </div>
                        </div>
                        <div className="project__button-container project__button-flip3d-vertical2">
                            <div className="project__flipper project__flipper-flip3d-vertical2">
                                <div className="project__button project__front">
                                    <i className="fas fa-code"></i>
                                </div>
                                <div className="project__button project__button-3d project__back"><a target="_blank" href={projectDetails[1]}>Code</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
