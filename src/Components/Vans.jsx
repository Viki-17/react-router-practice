import React, { useEffect, useState } from "react";
import classes from "./Vans.module.css";
import "../../server.js";
import { Link } from "react-router-dom";

function Vans() {
  const [van, setVan] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVan(data.vans);
      });
  }, []);

  const vanElements = van?.map((item) => (
    <div key={item.id} className={classes.elements}>
      <Link to={`/vans/${item.id}`}>
        <img src={item.imageUrl} alt="" />
        <div className={classes.data}>
          <h3>{item.name}</h3>
          <p>${item.price}/day</p>
        </div>
        <button className={`${classes.type} ${classes[item.type]}`}>
          {item.type}
        </button>
      </Link>
    </div>
  ));

  return (
    <>
      <div className={classes.container}>
        <h1>Explore our van options</h1>
        <div className={classes.grid}>{vanElements}</div>
      </div>
    </>
  );
}

export default Vans;
