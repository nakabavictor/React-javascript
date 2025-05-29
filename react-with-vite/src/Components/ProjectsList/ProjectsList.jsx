import { useContext, useEffect, useState } from "react";
import "./ProjectsList.css";
import Like from "../../assets/like.png";
import Liked from "../../assets/liked.png";

import { getAAPI } from "../../Services/apiServices";
import { AppContext } from "../../context/AppContext";

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [isLiked, setLike] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await getAAPI("projects");
        setProjects(projectsResponse);
      } catch {
        setProjects([]);
      }
    };
    fetchData();
  }, []);

  const LikeOrLiked = () => {
    setLike(!isLiked);
  };

  const appContext = useContext(AppContext);

  return (
    <>
      <div className="container al-center">
        <div className="texts">
          <h1>{appContext.languages[appContext.language].projects.title}</h1>
          <p>{appContext.languages[appContext.language].projects.subtitle}</p>
        </div>
        <div className="grid-container">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.id} className="card">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: `url(${project.thumb})`,
                  }}
                ></div>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <img onClick={LikeOrLiked} src={`${isLiked ? `${Liked}` : `${Like}`}`} alt="Like icon" />
              </div>
            ))
          ) : (
            <p>Carregando projetos...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectsList;
