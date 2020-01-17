import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

import { Switch, Route } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <Switch>
          <Route exact path ="/" component={LandingPage} />
          <Route exact path ="/aboutme" component={AboutMe} />
          <Route exact path ="/contact" component={Contact} />
          <Route exact path ="/projects" component={Projects} />
          <Route exact path ="/resume" component={Resume} />
      </Switch>
    )
  }
}

export default Main;
