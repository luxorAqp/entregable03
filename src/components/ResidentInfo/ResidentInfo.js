import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ResidentInfo.css";
const ResidentInfo = ({ resident }) => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    axios.get(resident).then((res) => setInfo(res.data));
  }, [resident]);
  console.log(info);
  return (
    <li>
      <div className="card">
        <h2>{info.id}</h2>
        <h3>{info.name}</h3>
        <img src={info.image} alt="" />
        <h2>status: {info.status}</h2>
        <h2>origin: {info.orogin?.name}</h2>
        <h2>episodes: {info.episode?.length}</h2>
      </div>
    </li>
  );
};

export default ResidentInfo;
