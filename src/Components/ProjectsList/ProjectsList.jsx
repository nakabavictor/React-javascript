import { useContext, useEffect, useState } from "react";
import "./ProjectsList.css";
import Like from "../../assets/like.png";
import Liked from "../../assets/liked.png";

import { getAAPI } from "../../Services/apiServices";
import { AppContext } from "../../Context/AppContext";

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [faveProjects, setFaveProjects] = useState([]);

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

  const handleSavedProjects = (id) => {
    setFaveProjects((prevFaveProjects) => {
      if (prevFaveProjects.includes(id)) {
        const filteredArray = prevFaveProjects.filter((projectId) => projectId !== id);
        sessionStorage.setItem("faveProjects", JSON.stringify(filteredArray));
        return filteredArray;
      } else {
        const newFaveProjects = [...prevFaveProjects, id];
        sessionStorage.setItem("faveProjects", JSON.stringify(newFaveProjects));
        return newFaveProjects;
      }
    });
  };

  useEffect(() => {
    const savedProjects = JSON.parse(sessionStorage.getItem("faveProjects"));
    if (savedProjects) {
      setFaveProjects(savedProjects);
    }
  }, []);

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
                <img
                  onClick={() => handleSavedProjects(project.id)}
                  alt="Like icon"
                  src={faveProjects.includes(project.id) ? Liked : Like}
                />
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
