import React from "react";
import classes from "./Home.module.scss";
import logoLight from "../../assets/logo-light.svg";
import logoDark from "../../assets/logo-dark.svg";
import IconCross from "../Icons/IconCross";
const Home = () => {
  return (
    <section className={classes.home}>
      {/* header start */}
      <section className={classes.header}>
        <div className={classes.logo}>
          <img src={logoDark} alt="logo_light" />
        </div>
      </section>
      {/* header end */}
      {/* body start */}
      <section className={classes.kanban_app_body}>
        <section className={classes.side_bar}>
          <section className={classes.side_bar_content}>
            {/* All boards start */}
            <section className={classes.all_boards}>
              <span className={classes.all_boards_heading}>all boards</span>
              <ul>
                <li>
                  <span>Platform Launch</span>
                </li>
                <li>
                  <span>Marketing Plan</span>
                </li>
                <li>
                  <span>Roadmap</span>
                </li>
                <li>
                  <span>Create New Board</span>
                </li>
              </ul>
            </section>
            {/* All boards end */}
          </section>
        </section>
      </section>
      {/* body end */}
    </section>
  );
};

export default Home;
