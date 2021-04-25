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
  return (
    <div id="TablePage">
      {vehicleInfo !== "" ? (
        <div id="vehicleList">
          {vehicleInfo.year.type} {vehicleInfo.make.type} {vehicleInfo.model.type}
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
export default Table;
