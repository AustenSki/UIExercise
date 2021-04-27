//Dependencies
import React, { useState, useEffect } from "react";
import Search from "./Search";
//This function is for the Table component
function Table() {
  //UseState Variables
  const [vehicleInfo, setVehicleInfo] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  //Fetching the data from swagger
  useEffect(() => {
    if (vehicleInfo === "") {
      fetch("http://api.coxauto-interview.com/swagger/v1/swagger.json")
        .then((res) => res.json())
        .then((data) =>
          setVehicleInfo(data.definitions.VehicleResponse.properties)
        );
    }
  });
  //Console logging the year, make and model data
  if (vehicleInfo !== "") {
    console.log(vehicleInfo.year);
    console.log(vehicleInfo.make);
    console.log(vehicleInfo.model);
  }
  //This is suppose to be used to sort data with ascending and descending order
  function sortBy(key) {
    this.setState({
      vehicleInfo: vehicleInfo.sort((a, b) => a[key] < b[key]),
    });
  }
  return (
    <div id="searchBar">
      {/* Bringing in the search function from the search component */}
      <Search
        onSearch={(value) => {
          setSearch(value);
          setCurrentPage(1);
        }}
      />
      <div id="TablePage">
        <table>
          <tr id="Columns">
            {/* These are the buttons to sort each category to ascending or descending order */}
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
          {/* Populating the page with fetched data and placing it into a table*/}
          {vehicleInfo !== "" ? (
            <div>
              <tbody>
                <tr id="TableContents">
                  <td>{vehicleInfo.year.type}</td>
                  <td>{vehicleInfo.make.type}</td>
                  <td>{vehicleInfo.model.type}</td>
                </tr>
                {/* Vehicles that I added in by hand that were not fetched */}
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
            //This presents loading onto the page while data is gathered
            "Loading..."
          )}
        </table>
      </div>
    </div>
  );
}
export default Table;
