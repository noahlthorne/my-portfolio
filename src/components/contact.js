import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Photo from "../images/P1120527.png"
import MyForm from "./contactform"

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
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>If you are interested in my work, would like more information about a project, or for any other questions, please feel free to contact me.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-form">
              <MyForm></MyForm>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
