import React, { useEffect, useState } from "react";
import axios from "axios";
import ResidentInfo from "../ResidentInfo/ResidentInfo";
import "./Location.css";
const Location = () => {
  const [locations, setLocations] = useState({});
  const [id, setId] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * 125) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => setLocations(res.data));
  }, []);
  console.log(locations);
  const searchLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}/`)
      .then((res) => setLocations(res.data));
  };
  return (
    <div className="location-container">
      <div className="location-item">
        <h2>{locations.name}</h2>
      </div>
      <div className="location-item">
        <h3>Type: {locations.type}</h3>
        <h3>Dimension: {locations.dimension}</h3>
        <h3>Residents: {locations.residents?.length}</h3>
      </div>
      <div className="location-item">
        <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
        <button onClick={searchLocation}>Search</button>
      </div>

      <ul className="rick-list">
        {locations.residents?.map((resident) => (
          <ResidentInfo resident={resident} key={resident} />
        ))}
      </ul>
    </div>
  );
};

export default Location;
