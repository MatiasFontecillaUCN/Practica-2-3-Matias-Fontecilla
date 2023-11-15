import "bootstrap/dist/css/bootstrap.min.css";

export default function Interests({ interests }) {
  return (
    <div className="row mt-4 border border-primary">
      <div className="col-md-2 text-center p-2">Intereses Personales</div>
      <ul className="list-group">
        {interests.map((interest, index) => {
          return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
              {interest.interest}
              <span className="badge bg-primary rounded-pill ">
                {index + 1}
              </span>
              {/* <img
                  src={programacion}
                  className="img-fluid img-programacion rounded shadow"
                  alt="..."
                  style={{ width: "10%" }}
                /> */}
            </li>
          );
        })}
      </ul>
      <div className="p-2"></div>
    </div>
  );
}
