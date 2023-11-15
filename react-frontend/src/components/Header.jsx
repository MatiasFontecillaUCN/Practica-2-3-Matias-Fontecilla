import "bootstrap/dist/css/bootstrap.min.css";

export default function Header({ name }) {
  return (
    <div className="col-md-6">
      <h1>
        <span className="badge bg-success rounded-pill text-bg-success">
          {name}
        </span>
      </h1>
    </div>
  );
}
