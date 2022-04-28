import React from "react";
import { SocialIcon } from 'react-social-icons';
import "../../styles.scss";

function Home() {
    return (
      <div className="home-container">
        <SocialIcon url="https://www.instagram.com/jdesign_art/" target="_blank" network="instagram" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://www.facebook.com" target="_blank" network="facebook" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://jdesigns-beta.netlify.app/" target="_blank" label="Share" style={{ height: 35, width: 35 }}/>
        <div className="profile-container">
          <span >
            Diseñadora Gráfica Learn programming with free online courses from real college. Pick up essential coding skills needed for frontend and/or backend web development, machine learning, IOS, Android, and much more.
          </span>
          <img
            src="https://i.ibb.co/jRD9GYd/Judith.png"
            alt="jdesign-img">
          </img>
        </div>
      </div>
    );
}

export default Home;

