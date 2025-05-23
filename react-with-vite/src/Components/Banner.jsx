import "./Banner.css";

function Banner(props) {
  return (
    <>
      <div id="banner" style={{ backgroundImage: `url(${props.image})` }}>
        <div className="containerBanner">
          <div className="titlebanner">
            <h1>{props.title}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
