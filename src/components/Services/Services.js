import React from "react";
import styles from "./Services.module.scss";
import image1 from "./eshop2.jpg"; // Tell webpack this JS file uses this image

import website from "./website1.jpg"; // Tell webpack this JS file uses this image
import app from "./app1.png"; // Tell webpack this JS file uses this image

import useWindowDimensions from "../../dimensions";

function Services(props) {
  const { height, width } = useWindowDimensions();

  if (height > 650 && width > 1100) {
    return (
      <div className="w-100 h-100 pt-5">
        <h1 className="text-white">SERVICES</h1>
        <ul className={styles.honeycomb} lang="en">
          <li className={styles.honeycomb_cell}>
            <img className={styles.honeycomb_cell__image} src={website}></img>
            <a>
              <div className={styles.honeycomb_cell__title}>Website</div>
            </a>
            <h5 className={styles.honeycomb_cell__details}>
            Create your own website
            </h5>
          </li>
          <li className={styles.honeycomb_cell}>
            <img className={styles.honeycomb_cell__image} src={image1}></img>
            <a>
              <div className={styles.honeycomb_cell__title}>E-shop</div>
            </a>
            <h5 className={styles.honeycomb_cell__details}>
              Create your own eshop
            </h5>
          </li>
          <li className={styles.honeycomb_cell}>
            <img className={styles.honeycomb_cell__image} src={app}></img>
            <a>
              <div className={styles.honeycomb_cell__title}>Mobile app</div>
            </a>
            <h5 className={styles.honeycomb_cell__details}>
            Create your mobile app
            </h5>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="all_center">
        <h1 className="text-white">SERVICES</h1>
        <div
          className="card text-white bg-primary mb-3"
          style={{maxWidth: `18rem`}}
        >
          <div className="card-header">WEBSITE</div>
          <div className="card-body">
            <h5 className="card-title">Create your own website</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          className="card text-white bg-secondary mb-3"
          style={{maxWidth: `18rem`}}
        >
          <div className="card-header">E-SHOP</div>
          <div className="card-body">
            <h5 className="card-title">Create your own e-shop</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          className="card text-white bg-success mb-3"
          style={{maxWidth: `18rem`}}
        >
          <div className="card-header">MOBILE APP</div>
          <div className="card-body">
            <h5 className="card-title">Create your own mobile app</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

      </div>
    );
  }
}

export default Services;
