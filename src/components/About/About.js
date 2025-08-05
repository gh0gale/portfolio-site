import React from "react";
import styles from "./AboutStyles.module.css";

export const About = () => {
  return (
    <div className={styles.aboutc}>
      <h1 className={styles.abouth}>About Me</h1>
      <p className={styles.aboutp}>
        I build and optimize digital experiences with the MERN stack, then
        leverage data analytics and machine learning to make those applications
        truly intelligent.
        <br />
        <br />
      </p>
    </div>
  );
};
