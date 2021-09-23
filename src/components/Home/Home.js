import React from 'react';
import styles from './Home.module.scss';
import Typewriter from 'typewriter-effect';
import Button from '@mui/material/Button';
// import './Home.css';


const Home = () => (
<div className={styles.home_container} style={{ 
    background: `url("/laptopImage.jpg") no-repeat center #eee`,
    backgroundSize: `cover`,
    height: `100vh`
  }}>

    <div className="p-5">
    <h1 className={styles.typeWriter_size} >
      <Typewriter 
        options={{
          strings: ['KantoDigital'],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
    <p className="typeWriter_size">
      I help people and brands reach their goals by building user-centric
      digital products and interactive experiences👋
    </p>
    <div className="d-flex justify-content-center align-items-center">
      <button type="button" href="#services" className="btn btn-primary mr-2">Services</button>
      <button type="button" href="#contact" className="btn btn-outline-light">Get Started</button>
    </div>
    </div>

  </div>

);

export default Home;
