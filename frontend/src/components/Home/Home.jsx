import React from "react";
import classes from "./Home.module.scss";
import logoLight from "../../assets/logo-light.svg";
import logoDark from "../../assets/logo-dark.svg";
import IconCross from "../Icons/IconCross";
import IconBoard from "../Icons/IconBoard";
import IconVerticalEllipses from "../Icons/IconVerticalEllipses";
import IconLightTheme from "../Icons/IconLightTheme";
import IconDarkTheme from "../Icons/IconDarkTheme";
import { useState } from "react";
import IconHideSideBar from "../Icons/IconHideSideBar";

const Home = () => {
  const iconBoardColor = "#828FA3";
  const createBoardColor = "#635FC7";
  function displayClickedMessage() {
    console.log("New Board Created");
  }
  const [numberOfBoards, setNumberOfBoards] = useState(3);
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
            {/* All_boards start */}
            <section className={classes.all_boards}>
              <span className={classes.all_boards_heading}>
                all boards ({numberOfBoards})
              </span>
              <ul className={classes.boards}>
                <li className={classes.board}>
                  <span className={classes.boardItem}>
                    <IconBoard fill={iconBoardColor} />
                    <span>Platform Launch</span>
                  </span>
                </li>
                <li className={classes.board}>
                  <span className={classes.boardItem}>
                    <IconBoard fill={iconBoardColor} />
                    <span>Marketing Plan</span>
                  </span>
                </li>
                <li className={classes.board}>
                  <span className={classes.boardItem}>
                    <IconBoard fill={iconBoardColor} />
                    <span>Roadmap</span>
                  </span>
                </li>
                <li className={`${classes.board} ${classes.create_new_board}`}>
                  <span className={classes.boardItem}>
                    <IconBoard fill={createBoardColor} />
                    <span
                      onClick={displayClickedMessage}
                      className={classes.newBoard}
                    >
                      +Create New Board
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            {/* All_boards end */}
            {/* controls start */}
            <section className={classes.controls}>
              <section className={classes.screen_mode}>
                <section className={classes.screen_mode_content}>
                  <IconLightTheme />
                  <label className={classes.slider_label}>
                    <input type="checkbox" />
                    <span className={classes.slider}></span>
                  </label>
                  <IconDarkTheme />
                </section>
              </section>
              <span className={classes.sidebar_visibility}>
                <IconHideSideBar />
                <span className={classes.hide_sidebar}>hide sidebar</span>
              </span>
            </section>
            {/* controls end */}
          </section>
        </section>
      </section>
      {/* body end */}
    </section>
  );
};

export default Home;
