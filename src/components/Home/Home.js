import React from "react";
import Typography from '@material-ui/core/Typography';
import { SocialIcon } from 'react-social-icons';

function Home() {
    return (
      <div className="home-container">
        <SocialIcon url="https://www.instagram.com/jdesign_art/" target="_blank" network="instagram" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://www.facebook.com" target="_blank" network="facebook" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://jdesigns-beta.netlify.app/" target="_blank" label="Share" style={{ height: 35, width: 35 }}/>
        <Typography variant="h2" component="h2" gutterBotom align="center">
          ¿Qué es JDesigns?
        </Typography>
        <span className="font-link22">
          Learn programming with free online courses from real college. Pick up essential coding skills needed for frontend and/or backend web development, machine learning, IOS, Android, and much more.
        </span>
      </div>
    );
}

export default Home;

