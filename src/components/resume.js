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
            <p>As a long time tech enthusiast, I have decided to make a career shift to programming. Over the past year or so, I have studied everything I can find on JavaScript and Ruby, built several of my own projects and graduated from Le Wagon coding school, the #1 rated coding school in the world. I am now seeking new opportunities as a full-stack developer with an eagerness to learn new languages and technologies.</p>
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
              startYear={2018}
              endYear={2019}
              jobName="Abernathy MacGregor"
              jobDescription="I worked in administration and front desk reception at a New York City public relations firm called Abernathy MacGregor. I systematized and organized client information and data and I served as a first line of contact for both new and returning clients for the New York office."
            />

             <WorkHistory
              startYear={2016}
              endYear={2019}
              jobName="Christ Church New York City"
              jobDescription="I served as the Director of Administration at Christ Church NYC. At Christ Church I assisted as a constructive and capable liaison between the professional leadership and the staff, streamlined databases for more accurate and effective record keeping, and ffectively managed and trained groups of volunteers."
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
