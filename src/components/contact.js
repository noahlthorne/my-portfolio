import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Photo from "../images/P1120527.png"
import { List, ListItem, ListItemContent } from 'react-mdl';

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
              <div className="contact-list">
                <List>

                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Lato'}}>
                      <i className="fa fa-phone-square" aria-hidden="true" />
                      (810)-360-5156
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Lato'}}>
                      <i className="fa fa-envelope" aria-hidden="true" />
                      noahlthorne@gmail.com
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                     <ListItemContent style={{fontSize: '30px', fontFamily: 'Lato'}}>
                      <i className="fa fa-skype" aria-hidden="true" />
                      My Skype Id
                    </ListItemContent>
                  </ListItem>

                </List>
              </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
