import React from 'react';
import Education from '../Education/Education';
import Skill from '../Skill/Skill';
import Work from '../Work/Work';
import "./BoxTwo.css"

const BoxTwo = () => {
    return (
        <div className="boxTwo">
            <Work></Work>
            <Skill></Skill>
            <Education></Education>
        </div>
    );
};

export default BoxTwo;