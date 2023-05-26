import React from "react";
import classes from "./Home.module.css";
function Home() {
  return (
    <>
      <div className={classes.container}>
        <img
          className={classes.img}
          src="/image 53.png"
          alt=""
          style={{ overflow: "hidden" }}
        />
        <h1 className={classes.heading}>
          You got the travel plans, we got the travel vans.
        </h1>
        <h3 className={classes.smallheading}>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </h3>
        <button className={classes.btn}>Find your van</button>
      </div>
    </>
  );
}

export default Home;
