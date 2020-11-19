import React from 'react';
import './TechStackInfo.css';

const TechStackInfo = ({techName}) => {
    return (
        <>
            <span className="project__badge project__badge--info">{techName}</span>
        </>
    )
}

export default TechStackInfo;
