import React from 'react';
import "./Body.css"
import PartOne from '../PartOne/PartOne';
import PartTwo from '../PartTwo/PartTwo';

const Body = () => {
    return (
        <div className="bodyPart">
            <PartOne></PartOne>
            <PartTwo></PartTwo>
        </div>
    );
};

export default Body;