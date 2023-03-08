import project_01 from "./../../img/projects/project_01.jpg";
import project_02 from "./../../img/projects/project_02.jpg";
import project_03 from "./../../img/projects/project_03.jpg";
import project_04 from "./../../img/projects/project_04.jpg";
import project_05 from "./../../img/projects/project_05.jpg";
import project_06 from "./../../img/projects/project_06.jpg";

import "./style.css"

const Project = () => {
    return ( 
        <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            <li className="project">
              <a href="./project-page.html">
                <img
                  src={project_01}
                  alt="project img"
                  className="project__img"
                />
                <h3 className="project__title">Gaming streaming portal</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img
                  src={project_02}
                  alt="project img"
                  className="project__img"
                />
                <h3 className="project__title">Video service</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img
                  src={project_03}
                  alt="project img"
                  className="project__img"
                />
                <h3 className="project__title">Video portal</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img
                  src={project_04}
                  alt="project img"
                  className="project__img"
                />
                <h3 className="project__title">Dating app</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img
                  src={project_05}
                  alt="project img"
                  className="project__img"
                />
                <h3 className="project__title">Landing</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img
                  src={project_06}
                  alt="project img"
                  className="project__img"
                />
                <h3 className="project__title">Gaming community</h3>
              </a>
            </li>
          </ul>
        </div>
      </main>
     );
}
 
export default Project;