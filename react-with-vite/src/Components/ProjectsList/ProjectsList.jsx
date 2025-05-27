import { useEffect, useState } from "react";
import "./ProjectsList.css";
import Like from "../../assets/like.png";
import Liked from "../../assets/liked.png";

import { getAAPI } from "../../Services/apiServices";

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

  return (
    <>
      <div className="container al-center">
        <div className="texts">
          <h1>Follow Our Projects</h1>
          <p>
            It is a long established fact that a reader will be distracted by the of readable content of page lookings
            at its layouts points.
          </p>
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
                <img onClick={LikeOrLiked} src={Like} alt="Like icon" />
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
