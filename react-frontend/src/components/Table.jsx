export default function Table({ frameworks }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Framework</th>
          <th scope="col">Manejo</th>
        </tr>
      </thead>
      <tbody>
        {frameworks.map((framework, index) => {
          return (
            <tr key={framework.id}>
              <th scope="row">{index + 1}</th>
              <td>{framework.framework}</td>
              <td>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Animated striped example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    style={{ width: `${framework.handle}%`}}
                  ></div>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
