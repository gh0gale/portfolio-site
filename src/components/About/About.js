import React from "react";
import styles from "./AboutStyles.module.css";

export const About = () => {
  return (
    <div className={styles.aboutc}>
      <h1 className={styles.abouth}>About Me</h1>
      <p className={styles.aboutp}>
        Hi! I’m Yash, a Computer Science engineering student from Mumbai,
        passionate about web development, UI/UX design, and emerging
        technologies. I specialize in building interactive, user-friendly
        experiences using HTML, CSS, JavaScript, and ReactJS, along with Figma
        for design and prototyping. My projects explore animations,
        micro-interactions, and dynamic interfaces, blending creativity with
        functionality. I enjoy refining my skills, experimenting with modern
        frameworks, and staying updated with industry trends to craft visually
        appealing and responsive applications.
        <br />
        <br />
        Beyond front-end development, I have a growing interest in Machine
        Learning and Data Science and actively explore new domains to expand my
        technical expertise.
      </p>
    </div>
  );
};
