import React from "react";
import classes from "./Home.module.scss";
import logoLight from "../../assets/logo-light.svg";
import logoDark from "../../assets/logo-dark.svg";
const Home = () => {
  return (
    <section className={classes.home}>
      <h1>Welcome to the Home Page</h1>
      <section className={classes.side_bar}>
        <div className={classes.logo}>
          <img src={logoDark} alt="logo_light"/>
        </div>
      </section>
    </section>
  );
};

export default Home;
