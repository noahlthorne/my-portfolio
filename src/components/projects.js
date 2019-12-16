import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import { Carousel } from  'react-bootstrap';


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

        <div className="project-description">
          <h1>Ronpa</h1>
          <hr style ={{borderTop: '1px solid #grey', width: '50%'}}/>
          <p>This debate app was born to enable structured, live discussion of any issue. Unlike the multitude of text-based discussion platforms online, Ronpa brings people face to face.</p>
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
            <h1>Swapsies</h1>
            <hr style ={{borderTop: '1px solid #grey', width: '50%'}}/>
            <p>Tired of getting peanuts for your unwanted games at second hand stores? Now you can swap them with other game enthusiasts and cut out the middleman.</p>
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
         <h1>Tipsy Turtle</h1>
         <hr style ={{borderTop: '1px solid #grey', width: '50%'}}/>
         <p>Save your favorite cocktail recipes or learn a new recipe!</p>
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
