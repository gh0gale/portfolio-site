import styles from "./SkillsStyles.module.css";

import html from "../../assets/html.png";
import css from "../../assets/css-3.png";
import js from "../../assets/js.png";
import reactjs from "../../assets/react.png";
import mongodb from "../../assets/MongoDB.svg";
import github from "../../assets/github.png";
import nodejs from "../../assets/nodejs.png";

import python from "../../assets/python.png";
import numPy from "../../assets/NumPy.svg";
import pandas from "../../assets/pandas.svg";
import matplotlib from "../../assets/Matplotlib.svg";
import seaborn from "../../assets/seaborn.svg";



function Skills() {


  return (
    <section className={styles.skillc}>
      <h1>SKILLS</h1>
      <section className={styles.dabba} >

        <div className={styles.content}>
          <img src={html} />
          <h3>HTML</h3>
        </div>

        <div className={styles.content}>
          <img src={css} />
          <h3>CSS</h3>
        </div>

        <div className={styles.content}>
          <img src={js} />
          <h3>JavaScript</h3>
        </div>

        <div className={styles.content}>
          <img src={reactjs} />
          <h3>React.js</h3>
        </div>

        <div className={styles.content}>
          <img src={mongodb} />
          <h3>MongoDB</h3>
        </div>

        <div className={styles.content}>
          <img src={github} />
          <h3>GitHub</h3>
        </div>
        <div className={styles.content}>
          <img src={nodejs} />
          <h3>NodeJS</h3>
        </div>
      </section>
      
      <section className={styles.dabba} >

        <div className={styles.content}>
          <img src={python} />
          <h3>Python</h3>
        </div>

        <div className={styles.content}>
          <img src={numPy} />
          <h3>NumPy</h3>
        </div>

        <div className={styles.content}>
          <img src={pandas} />
          <h3>Pandas</h3>
        </div>

        <div className={styles.content}>
          <img src={matplotlib} />
          <h3>Matplotlib</h3>
        </div>

        <div className={styles.content}>
          <img src={seaborn} />
          <h3>Seaborn</h3>
        </div>

       
      </section>
    </section>
  );
}

export default Skills;
