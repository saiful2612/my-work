import React from 'react';
import "./Skill.css";
import html from "../../images/html.png";
import css3 from "../../images/css3.png";
import bootstrap from "../../images/bootstrap.png";
import react from "../../images/react.png";
import jss from "../../images/jss.png";
import firebase from "../../images/firebase.webp"

const Skill = () => {
    return (
        <div className="skill">
            <h3 className="Marked" > <span>#</span>EXPERTISE</h3>
            <img src={html} alt=""/>
            <img src={css3} alt=""/>
            <img src={bootstrap} alt=""/>
            <img src={react} alt=""/>
            <img src={jss} alt=""/>
            <img src={firebase} alt=""/>
    
        </div>
    );
};

export default Skill;