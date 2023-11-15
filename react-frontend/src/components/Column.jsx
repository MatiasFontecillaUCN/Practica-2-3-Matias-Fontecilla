import "bootstrap/dist/css/bootstrap.min.css";

export default function Column({title}) {
  return (
    <>
      <div className="col-md-4 text-center">{title}</div>
    </>
  );
}
