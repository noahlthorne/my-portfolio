import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Photo from "../images/P1120527.png"
import Experience from "./experience"
import WorkHistory from "./workhistory"

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
            <h2 style={{paddingTop: '2em'}}>Noah Thorne</h2>
            <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
            <hr style ={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <hr style ={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Residence</h5>
            <p>Shibuya-ku</p>
            <h5>(810)-360-5156</h5>
            <h5>Email</h5>
            <p>noahlthorne@gmail.com</p>
            <hr style ={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience and Education</h2>


            <Experience
              startYear={2019}
              schoolName="Le Wagon"
              schoolDescription="I attended Le Wagon Tokyo, a 10-week intensive coding school to learn JavaScript ES6, Ruby on Rails, HTML, CSS, Bootstrap, SQL, git, and GitHub."
            />


            <Experience
              startYear={2019}
              schoolName="Le Wagon"
              schoolDescription="I attended Le Wagon Tokyo, a 10-week intensive coding school to learn JavaScript ES6, Ruby on Rails, HTML, CSS, Bootstrap, SQL, git, and GitHub."
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>

            <h2>Work History</h2>
            <WorkHistory
              startYear={2019}
              jobName="Abernathy MacGregor"
              jobDescription="I worked in administration and front desk reception at a New York City public relations firm called Abernathy MacGregor. I systematized and organized client information and data and I served as a first line of contact for both new and returning clients for the New York office."
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Skills</h2>

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
