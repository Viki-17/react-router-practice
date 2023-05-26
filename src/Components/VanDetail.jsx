import React, { useEffect, useState } from "react";
import classes from "./VanDetail.module.css";
import { Link, useParams } from "react-router-dom";
function VanDetail() {
  const params = useParams();
  const [van, setVan] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((datas) => {
        let data = datas.vans;
        data.map((item) => {
          if (params.id === item.id) {
            setVan(item);
          }
        });
      });
  }, []);
  return (
    <>
      <Link to={"/vans"}>Back to all vans</Link>
      <div key={van.id} className={classes.elements}>
        <img src={van.imageUrl} alt="" />
        <button className={`${classes.type} ${classes[van.type]}`}>
          {van.type}
        </button>
        <div className={classes.data}>
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
          <p>{van.description}</p>
          <button className={classes.btn}>Rent this van</button>
        </div>
      </div>
    </>
  );
}

export default VanDetail;
