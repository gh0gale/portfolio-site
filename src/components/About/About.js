import React from "react";
import styles from "./AboutStyles.module.css";

export const About = () => {
  return (
    <div className={styles.aboutc}>
      <h1 className={styles.abouth}>About Me</h1>
      <p className={styles.aboutp}>
        Hi! I’m Yash, a Computer Science engineering student from Mumbai, passionate about web development, UI/UX design, and emerging technologies. I specialize in building interactive, user-friendly experiences using HTML, CSS, JavaScript, ReactJS, and Figma for design and prototyping.

My skill set also includes backend development with Node.js and Express.js, enabling me to create full-stack applications with seamless functionality. My projects often explore animations, micro-interactions, and dynamic interfaces—blending creativity with performance.

I’m also deeply interested in machine learning and data analytics, and I enjoy exploring how data-driven insights and intelligent systems can power smarter applications and solve real-world problems.

I enjoy refining my skills, experimenting with modern frameworks, and staying updated with industry trends to craft visually appealing, responsive, and efficient digital experiences.
        <br />
        <br />
        
      </p>
    </div>
  );
};
