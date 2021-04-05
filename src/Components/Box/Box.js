import React from 'react';
import "./Box.css";
import Contact from '../Contact/Contact';
import Profile from '../Profile/Profile';
import Skill from '../Skill/Skill';

const Box = () => {
    return (
        <div className="boxOne">
            <Profile></Profile>
            <Contact></Contact>
        </div>
    );
};

export default Box;