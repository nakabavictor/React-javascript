import "./ProjectsList.css";
import Like from "../assets/like.png";

function ProjectsList() {
  return (
    <>
      <div className="container">
        <div className="texts">
          <h1>Follow Our Projects</h1>
          <p>
            It is a long established fact that a reader will be distracted by the of readable content of page lookings
            at its layouts points.
          </p>
        </div>
        <div className="grid-container">
          <div className="card">
            <div className="thumb"></div>
            <h3>Joao Vitor</h3>
            <p>BH, Brazil</p>
            <img src={Like} />
          </div>
          <div className="card">
            <div className="thumb"></div>
            <h3></h3>
            <p></p>
            <img src={Like} />
          </div>
          <div className="card">
            <div className="thumb"></div>
            <h3></h3>
            <p></p>
            <img src={Like} />
          </div>
          <div className="card">
            <div className="thumb"></div>
            <h3></h3>
            <p></p>
            <img src={Like} />
          </div>
          <div className="card">
            <div className="thumb"></div>
            <h3></h3>
            <p></p>
            <img src={Like} />
          </div>
          <div className="card">
            <div className="thumb"></div>
            <h3></h3>
            <p></p>
            <img src={Like} />
          </div>
          <div className="card">
            <div className="thumb"></div>
            <h3></h3>
            <p></p>
            <img src={Like} />
          </div>
          <div className="card">
            <div className="thumb"></div>
            <h3></h3>
            <p></p>
            <img src={Like} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsList;
