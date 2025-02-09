import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Design uten navn.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import b1 from "../../assets/b1.png";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          // src={heroImg}
          src={b1}
          className={styles.hero}
          alt="Profile picture of Yash Ghogale"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.infoh}>
          Yash
          <br />
          Ghogale
        </h1>
        <h2>UG Student</h2>
        <span>
          
            <a href="https://github.com/gh0gale" target="_blank">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-ghogale-21b115335/"
              target="_blank"
            >
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
        </span>
        {/* <p className={styles.description}>Based in Mumbai</p> */}
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
