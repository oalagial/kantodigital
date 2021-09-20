import React from 'react';
import styles from './Home.module.scss';
import Typewriter from 'typewriter-effect';
import Button from '@mui/material/Button';

const Home = () => (
  <div className={styles.home_container} style={{ 
    backgroundImage: `url("/laptopImage.jpg")` 
  }}>

    <h1>
      <Typewriter 
        options={{
          strings: ['KANTODIGITAL'],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
    <p>
      I help people and brands reach their goals by building user-centric
      digital products and interactive experiences👋
    </p>
    <div className="d-flex justify-content-center align-items-center">
      <button type="button" href="#serices" className="btn btn-primary mr-2">Services</button>
      <button type="button" href="#contact" className="btn btn-outline-light">Get Started</button>
    </div>

  </div>

);

export default Home;
