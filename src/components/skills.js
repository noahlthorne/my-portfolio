import React, { Component } from  'react';
import { Grid, Cell} from 'react-mdl';

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex'}}>
            <h5 class="skills-list">JavaScript | TypeScript | NodeJS | NestJS | Ruby on Rails | AWS | ReactJS | HTML | CSS | SQL/Postgres | MongoDB</h5>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
