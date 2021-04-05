import React from 'react';
import "./Profile.css";
import photo from "../../images/photo.JPG"

const Profile = () => {
    return (
        <div>
           <div className="profile">
               <img src={photo} alt=""/>
                <div>
                    <h3 className="Marked"> <span>#</span> PROFILE</h3>
                    <p>I'm Md. Saiful Islam. I'm self taught Frontend Developer with over 8 month's of experience.I'm good at HTML5, CSS3, Javascript and React. I can make any web pages and try to make clients supreme satisfaction. </p>
                </div>
           </div>

        </div>
    );
};

export default Profile;