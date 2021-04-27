import React, { useState, useEffect } from "react";

function Table() {
  const [vehicleInfo, setVehicleInfo] = useState("");

  useEffect(() => {
    if (vehicleInfo === "") {
      fetch("http://api.coxauto-interview.com/swagger/v1/swagger.json")
        .then((res) => res.json())
        .then((data) =>
          setVehicleInfo(data.definitions.VehicleResponse.properties)
        );
    }
  });
  if (vehicleInfo !== "") {
    console.log(vehicleInfo.year);
    console.log(vehicleInfo.make);
    console.log(vehicleInfo.model);
  }
  function sortBy(key) {
    this.setState({
      vehicleInfo: vehicleInfo.sort((a, b) => a[key] < b[key]),
    });
  }
  return (
    <div id="searchBar">
      <input type="search" placeholder="Search..."></input>

      <div id="TablePage">
        <table>
          <tr id="Columns">
            <th>
              <button onCLick={() => sortBy("year")}> Vehicle Year </button>
            </th>

            <th>
              <button onCLick={() => sortBy("make")}> Vehicle Make </button>
            </th>

            <th>
              <button onCLick={() => sortBy("model")}> Vehicle Model </button>
            </th>
          </tr>

          {vehicleInfo !== "" ? (
            <div>
              <tbody>
                <tr id="TableContents">
                  <td>{vehicleInfo.year.type}</td>
                  <td>{vehicleInfo.make.type}</td>
                  <td>{vehicleInfo.model.type}</td>
                </tr>
                <tr id="addedAudi">
                  <td>2020 </td>
                  <td>Audi</td>
                  <td>A3</td>
                </tr>
                <tr id="addedBMW">
                  <td>2013</td>
                  <td>BMW</td>
                  <td>X3</td>
                </tr>
                <tr id="addedFord">
                  <td>1988</td>
                  <td>Ford</td>
                  <td>EXP</td>
                </tr>
              </tbody>
            </div>
          ) : (
            "Loading..."
          )}
        </table>
      </div>
    </div>
  );
}
export default Table;
