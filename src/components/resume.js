import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Photo from "../images/Noah.png"
import Experience from "./experience"
import WorkHistory from "./workhistory"
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell  className="resume-left-col" col={4}>
            <div style={{textAlign: 'center' }}>
              <img
                src={Photo}
                alt="Profile"
                className="profile-photo"
              />
            </div>
            <h2 style={{paddingTop: '16px'}}>Noah Thorne</h2>
            <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
            <hr style ={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Full-stack software engineer with an enthusiasm for server-side development. I have worked with many frameworks and technologies and am currently in an e-commerce setting in a Shopify partner company, working on B2B applications and theme development for merchants on the Shopify platform. I am now seeking new opportunities as a full-stack developer with an eagerness to work with new languages and technologies.</p>
            <hr style ={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Residence | Shibuya-ku</h5>
            <h5>Phone Number(US) | (810)-360-5156</h5>
            <h5>Email | noahlthorne@gmail.com</h5>
            <hr style ={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Experience
              startYear={2019}
              schoolName="Le Wagon"
              schoolDescription="I attended Le Wagon Tokyo, a 9-week intensive coding school to learn JavaScript ES6, Ruby on Rails, HTML, CSS, Bootstrap, SQL, git, and GitHub."
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>

            <h2>Work History</h2>
            <WorkHistory
              startYear={2020}
              jobName="Flagship LLC (Tokyo)"
              jobDescription="
              As a full stack software engineer at Flagship, I worked on many apps for Merchants on the Shopify platform. My most recent projects were built using Nest Js, Typescript, React and AWS S3, and their function was to automatically generate and serve front end scripts to Shopify stores based on their own specific customer data, in order to better provide users with a personalized UI experience. In addition to this application, I have also built and contributed to many other projects at the company using a variety of frameworks including building serverless solutions with the objective of creatively storing and use customer data in front end components of e-commerce sites using AWS serverless and Mongodb."
            />
            <WorkHistory
              startYear={2019}
              endYear={2020}
              jobName="Le Wagon (Tokyo)"
              jobDescription="At Le Wagon, I provided support and training for students at the Le Wagon Full-stack Coding Bootcamp in Tokyo. Students are trained in a 10-week intensive coding school to learn JavaScript ES6, Ruby on Rails, HTML, CSS, Bootstrap, SQL, git, GitHub, and Heroku."
            />
            <WorkHistory
              startYear={2018}
              endYear={2019}
              jobName="Abernathy MacGregor (New York)"
              jobDescription="I worked in administration and front desk reception at a New York City public relations firm called Abernathy MacGregor. I systematized and organized client information and data and I served as a first line of contact for both new and returning clients for the New York office."
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Skills</h2>
              <Skills/>
          </Cell>

        </Grid>
      </div>
    );
  }
}

export default Resume;
