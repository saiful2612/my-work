import React from 'react';
import "./Work.css"
import shop from "../../images/shop.jpg";
import school from "../../images/school.jpg";

const Work = () => {

    const click = () =>{
        <a href="https://saiful2612.github.io/panda-commerce/"></a>
    }
    return (
        <div className="project">
            <h3 className="Marked" ><span>#</span>PROJECTS</h3>

        <div className="work">
            <div className="workOne">
                <h3>Online Shop</h3>
                <img onClick={click} src={shop} alt=""/>
                {
                   
                }
                
            </div>

            <div className="workTwo">
                <h3>Online School</h3>
                <img src={school} alt=""/>
                <a href="https://saiful2612.github.io/E-school/"></a>
            </div>
        </div>

        </div>
    );
};

export default Work;