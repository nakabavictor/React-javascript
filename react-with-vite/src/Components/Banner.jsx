import "./Banner.css";
function Banner(props) {
  return (
    <>
      <div id="banner" style={{ backgroundImage: `url(/${props.image})` }}>
        <div className="container">
          <h1>{props.Title}</h1>
        </div>
      </div>
    </>
  );
}

export default Banner;
