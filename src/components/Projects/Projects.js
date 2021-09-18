import React from 'react';
import styles from './Projects.module.scss';

const Projects = () => (
  <div>

<h1 className={styles.title, styles.otinane}>Portfolio</h1>
<ul className={styles.honeycomb} lang="en">
    {/* <li className="honeycomb_cell" *ngFor="let project of projects">
       <img className="honeycomb_cell__image" src="{{'../../assets/' + projects.name + '.png'}}">
      <a ><div className="honeycomb_cell__title">{{project.name}}1</div></a>
       - {{project.language}}3
    </li>  */}
    <li className={styles.honeycomb_cell}>
      {/* <img className="honeycomb_cell__image" src="{{'../../assets/' + projects.name + '.png'}}"> */}
      <a ><div className={styles.honeycomb_cell__title}>test1</div></a>
       - test_language
    </li>
    <li className={styles.honeycomb_cell,styles.honeycomb__placeholder}></li>
  </ul>

  <h2>ff</h2>

  </div>

);

export default Projects;
