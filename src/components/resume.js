import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Photo from "../images/P1120527.png"

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
          </Cell>
          <Cell className="resume-right-col" col={4}>
            Right Side
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
