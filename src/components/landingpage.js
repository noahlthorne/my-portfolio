import React, { Component } from 'react';
import Photo from "../images/noah2.JPG"

class Landing extends Component {
  render() {
    return (
      <div className="landing-grid" >

            <div className="banner-text">

              <div className="landing-page-pic">
                <img
                  src={Photo}
                  alt="Profile"
                  className="landing-photo"
                />
              </div>

              <h1>Noah Thorne</h1>
              <h4>Full Stack Developer</h4>
              <hr/>
              <p className="skills">JavaScript | TypeScript | NodeJS | NestJS | Ruby on Rails | AWS | ReactJS | HTML | CSS | SQL/Postgres | MongoDB</p>

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
              <div className="about-me-text">
                <p>I am an experienced full-stack software engineer with an enthusiasm for server-side development. I have worked with many frameworks and technologies and am currently in an e-commerce setting in a Shopify partner company, working on B2B applications and theme development for merchants on the Shopify platform. I am now seeking new opportunities as a full-stack developer with an eagerness to work with new languages and technologies.</p>
              </div>
            </div>

      </div>
    );
  }
}

export default Landing;
