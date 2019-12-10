import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Photo from "../images/P1120527.png"

class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={Photo} alt="Profile Image" className="profile-photo"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
