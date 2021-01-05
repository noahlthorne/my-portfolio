import React, { Component } from  'react';
import { Grid, Cell} from 'react-mdl';

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex'}}>
            <h5>JavaScript | TypeScript| Ruby on Rails | AWS | ReactJS | HTML | CSS | SQL/Postgres | AJAX | Github </h5>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
