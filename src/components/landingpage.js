import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Photo from "../images/P1120527.png"

class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid" style={{paddingTop: '38px'}}>

          <Cell col={6}>
            <img
              src={Photo}
              alt="Profile"
              className="profile-photo"
            />
            <div className="banner-text">
              <h1>Full Stack Developer</h1>
              <hr/>
              <p>Ruby on Rails | JavaScript | ReactJS | HTML/CSS | SQL </p>

              <div className="social-links">
                {/* Linkedin */}
                <a href="https://www.linkedin.com/in/noahlthorne/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>

                {/* Github*/}
                 <a href="https://github.com/noahlthorne" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github-square" aria-hidden="true"/>
                </a>

                {/* Facebook */}
                 <a href="https://www.facebook.com/noah.thorne.908" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook-square" aria-hidden="true"/>
                </a>

                {/* Instagram */}
                 <a href="https://www.instagram.com/buckwheatthorne/?hl=en" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram" aria-hidden="true"/>
                </a>
              </div>
            </div>
          </Cell>

          <Cell col={6}>
            <div className="about-text">
              <h1>About</h1>
              <hr/>
              <p>I am a graduate of Le Wagon Tokyo, the #1 rated coding school in the world, and am now seeking new opportunities as a fullstack developer. I am an inventive and creative developer and love building projects and learning new technologies. I work very well within a team and am also proficient when working on my own. I am a driven programmer and have work experience workng in detail-oriented and results directed environments. Working with a team in a startup workflow was one of the best experiences I've had during my programming practice. Please feel free to contact me anytime if you would like to see samples of my code, more information about a project, or for any other questions.</p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
