import React, { useEffect, useState } from "react";
import GetIssue from "../helpers/GetIssue";
import "../styles/SeacrBox.css";
function SearchBox({ placeholder }) {
  const [issues, setIssues] = useState([]);
  const [palabraBuscar, setPalabraBuscar] = useState("");
  useEffect(() => {
    GetIssue(palabraBuscar).then(
      (res) => {
        setIssues(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [palabraBuscar]);
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => setPalabraBuscar(e.target.value)}
        ></input>
      </div>
      <ul className="list">
        {issues.length !== 0 && (
          <div className="dataResult">
            {issues.map((value, key) => {
              const { title, labels } = value;
              const nombre = labels.map((val) => {
                return val.name;
              });
              return (
                <li className="dataItem" key={key}>
                  {title}
                  <p>{nombre}</p>
                </li>
              );
            })}
          </div>
        )}
      </ul>
    </div>
  );
}

export default SearchBox;
