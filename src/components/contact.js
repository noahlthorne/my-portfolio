import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Photo from "../images/P1120527.png"

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Noah Thorne</h2>
            <img
             src={Photo}
            alt="avatar"
            className="profile-photo"/>
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>askasfa</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
