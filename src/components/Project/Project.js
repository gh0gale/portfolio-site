import styles from './ProjectStyles.module.css';
import nft from '../../assets/nft.png';
import ll from '../../assets/ll.png';
import coffee from '../../assets/coffee.png';
import food from '../../assets/food.png';
import uber from '../../assets/uber.png';
import ProjectCard from '../../common/ProjectCard';
import ecom from '../../assets/ecom.png';
import examc from '../../assets/examc.png';
import onethrive from '../../assets/onethrive.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ecom}
          link="https://github.com/gh0gale/e-commerce"
          h3="Ecommerce Site"
          p="MERN(MongoDB, Express, ReactJS, NodeJS)"
        />
        <ProjectCard
          src={examc}
          link="https://github.com/gh0gale/"
          h3="Exam Central"
          p="ReactJS, FirebaseDB, Firebase Auth "
        />
        <ProjectCard
          src={nft}
          link="https://github.com/gh0gale/blobbe"
          h3="Blobble"
          p="HTML/CSS/ReactJS"
        />
        <ProjectCard
          src={ll}
          link="https://github.com/gh0gale/little-lemon"
          h3="Little Lemon"
          p="HTML/CSS/JavaScript/ReactJS"
        />
        <ProjectCard
          src={onethrive}
          link="https://onethrive-beta.vercel.app/"
          h3="OneThrive"
          p="HTML/CSS/JavaScript/ReactJS"
        />
        
        
      </div>

      <h1 className="sectionTitle">Designs</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={coffee}
          link="https://www.figma.com/design/KJZEmHDnNvxwRxKpjgL9zt/Coffee-shop-app?node-id=0-1&t=wljVURIKKZOhAe3V-1"
          h3="Coffee Shop App"
          p="Figma"
        />
        <ProjectCard
          src={food}
          link="https://motiff.com/file/82IyyG08UKQ4wDk2JZ6sI83?nodeId=0%3A1&type=design"
          h3="Food Relief"
          p="Motiff"
        />
        <ProjectCard
          src={uber}
          link="https://www.figma.com/design/ntmV5MeyWfnAJsbOI6bKxm/Uber?node-id=0-1&t=hLlvIrA6ZN4Jtpp2-1"
          h3="Uber Site"
          p="Figma"
        />
      </div>
      
    </section>

    
  );
}

export default Projects;