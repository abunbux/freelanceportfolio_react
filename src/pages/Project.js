import BtnGitHub from "../components/footer/BtnGitHub";
import img from "./../img/projects/project_02_big.jpg"

const Project = () => {
    return ( 
        <main className="section">
        <div className="container">
          <div className="project-details">
            <h1 className="title-1">Video service</h1>
            <img src={img} alt="" className="project-detail__cover" />
            <div className="project-details__desc">
              <p>Skills: React, Node.js, MongoDB</p>
            </div>

            <BtnGitHub link="https://github.com" />
          </div>
        </div>
      </main>
     );
}
 
export default Project;