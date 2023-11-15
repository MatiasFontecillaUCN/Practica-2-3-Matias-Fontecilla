import "bootstrap/dist/css/bootstrap.min.css";
import imgSrc from "../assets/download.png"

export default function Summary({ summary, img_path }) {
  // const imgSrc = require(`${img_path}`);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imgSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{summary}</p>
      </div>
    </div>
  );
}
