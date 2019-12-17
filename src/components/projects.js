import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import { Carousel, ButtonGroup } from  'react-bootstrap';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0 ) {
    return(
      <div className="project-content">

        <div className="project-carousel">
          <div>
            <Carousel className="carousel">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/ronpa-logo.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('../images/dashboard.png')}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('../images/debate.png')}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>

        </div>

        <div className="project-description">
          <div className="project-header">
            <div>
              <h1>Ronpa!</h1>
            </div>
            <div className="project-buttons">
              <ButtonGroup>
                <a href="https://github.com/shindosu/ronpa" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="http://www.ronpa.org/" target="_blank" rel="noopener noreferrer">
                  Website
                </a>
              </ButtonGroup>
            </div>
          </div>
          <hr/>
          <h4>Project Overview</h4>
          <p>Ronpa is a live debate platform designed to enable structured, live discussion of any issue. Unlike the multitude of text-based discussion platforms online, Ronpa brings people face to face.</p>
          <hr/>
          <h4>Concept</h4>
          <p>The idea behind Ronpa was to create an approachable, fun way to debate live with strangers or people you know on a topic of your choosing. We wanted to take something that is perceived as intimidating and gamify it, in order to make it something that anyone could engage in, but without the pressure of a typical debate environment.</p>
          <hr/>
          <h4>Challenges and Solutions</h4>
          <p>The most challening aspect of creating this app was the debate itself. Creating seperate views and unique actions, timers and synchronised browser refreshes depending on your role in the debate is not an easy task. We implemented Action Cable to integrate WebSockets with our application to render the different views for each user and we used JavaScript to render a timer that would update the phase of the debate.</p>
        </div>

      </div>
      )
    } else if(this.state.activeTab === 1) {
      return(
        <div className="project-content">

          <div className="project-carousel">
            <Carousel className="carousel">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('../images/swapsies-home.png')}
                  alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('../images/browse-games.png')}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require('../images/swap-screen.png')}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="project-description">
            <div className="project-header">
              <div>
                <h1>Swapsies</h1>
              </div>
              <div className="project-buttons">
                <ButtonGroup>
                  <a href="https://github.com/edowardo/swapsies" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href="http://gameswapsies.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    Website
                  </a>
                </ButtonGroup>
              </div>
            </div>
            <hr/>
            <h4>Project Overview</h4>
            <p>Swapsies is an app for those who are tired of getting peanuts for their unwanted games at second hand stores. Now you can swap them with other game enthusiasts and cut out the middleman.</p>
            <hr/>
            <h4>Concept</h4>
            <p>Swapsies was created in order to give people a place to swap their old used games for new used games. It gives gamers an easy way to list their used games, and make requests to trade games from their inventory.</p>
            <hr/>
            <h4>Challenges and Solutions</h4>
            <p>One challenge we faced when building swapsies was developing a database of games to draw from. Using IGDB video game database API, I was able to create a dynamic list of games along with their aggregated critic rating, platform and respective genres.</p>
          </div>

        </div>
      )
    } else {
      return(
     <div className="project-content">

       <div className="project-carousel">
         <Carousel className="carousel">
           <Carousel.Item>
             <img
               className="d-block w-100"
               src={require('../images/tipsy-turtle-home.png')}
               alt="First slide"
             />
             <Carousel.Caption>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
             <img
               className="d-block w-100"
               src={require('../images/add-cocktail.png')}
               alt="Second slide"
             />
           </Carousel.Item>
         </Carousel>
       </div>

       <div className="project-description">
         <div className="project-header">
            <div>
              <h1>Tipsy Turtle</h1>
            </div>
            <div className="project-buttons">
              <ButtonGroup>
                <a href="https://github.com/noahlthorne/tipsy-turtle" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://tipsyturtle.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  Website
                </a>
              </ButtonGroup>
            </div>
          </div>
          <hr/>
          <h4>Project Overview</h4>
          <p>Save your favorite cocktail recipes or learn a new recipe!</p>
          <hr/>
          <h4>Concept</h4>
          <p>Tipsy Turtle is a cocktail creation app. You can create new recipes on the site and view recipes that others have made as well. Its great for people who make a living as a bartender</p>
          <hr/>
          <h4>Challenges and Solutions</h4>
          <p>This was a personal front end experiment for me. I wanted to design an app with an eye catching landing page while keeping it simple.</p>
       </div>

     </div>
      )
    }
  }



  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Ronpa!</Tab>
          <Tab>Swapsies</Tab>
          <Tab>Tipsy Turtle</Tab>
        </Tabs>
        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">
                 {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
