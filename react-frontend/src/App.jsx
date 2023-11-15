import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Column from "./components/Column";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Interests from "./components/Interests";
import Table from "./components/Table";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";

function App() {
  const [data, setData] = useState(null);

  function handleData(url) {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }

  useEffect(() => {
    handleData("/profile");
  }, []);
  console.log(data);

  return (
    <div className="container">
      {data ? (
        <>
          <div className="row mt-4">
            <Header name={data.user.name}></Header>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 col-xs-8">
              <Summary
                summary={data.user.summary}
                img_path={data.user.img_path}
              />
            </div>
            <div className="row mt-4">
              <Column title="Edad"></Column>
              <Column title="Ciudad de origen"></Column>
              <Column title="Correo electronico"></Column>
              <Column title={data.user.age}></Column>
              <Column title={data.user.birth_place}></Column>
              <Column title={data.user.email}></Column>
            </div>
            <Interests interests={data.interests}></Interests>
          </div>
          <Table frameworks={data.frameworks}></Table>
        </>
      ) : (
        "Cargando..."
      )}
    </div>
  );
}

export default App;
