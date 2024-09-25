import React from "react";
import classes from "./Home.module.scss";
import logoLight from "../../assets/logo-light.svg";
import logoDark from "../../assets/logo-dark.svg";
import IconCross from "../Icons/IconCross";
import IconBoard from "../Icons/IconBoard";
import IconVerticalEllipses from "../Icons/IconVerticalEllipses";
import IconDarkTheme from "../Icons/IconDarkTheme/IconDarkTheme";
import IconLightTheme from "../Icons/IconLightTheme/IconLightTheme";
import { useState } from "react";
import IconHideSideBar from "../Icons/IconHideSideBar";
import IconShowSideBar from "../Icons/IconShowSideBar";

const Home = () => {
  const iconBoardColor = "#828FA3";
  const createBoardColor = "#635FC7";

  function displayClickedMessage() {
    console.log("New Board Created");
  }

  const [numberOfBoards, setNumberOfBoards] = useState(3);
  const [sideBarIsHidden, setSideBarIsHidden] = useState(false);

  const sideBarClass = sideBarIsHidden
    ? `${classes.side_bar} ${classes.side_bar_hidden}`
    : classes.side_bar;

  function hideSideBar() {
    console.log("Sidebar is now hidden");
    setSideBarIsHidden(true);
  }

  function showSideBar() {
    console.log("Sidebar is now shown");
    setSideBarIsHidden(false);
  }

  return (
    <section className={classes.home}>
      {/* header start */}
      <section className={classes.header}>
        <div className={classes.logo}>
          <img src={logoDark} alt="logo_light" />
        </div>
        <div className={classes.header_text}>
          {" "}
          <span className={classes.platform_launch_text}>Platform Launch</span>
          <div className={classes.header_text_right}>
            <button className={classes.add_new_tasks}>add new tasks</button>
            <IconVerticalEllipses />
          </div>
        </div>
      </section>
      {/* header end */}

      {/* body start */}
      <section className={classes.kanban_app_body}>
        {/* sideBar START */}
        <section className={sideBarClass}>
          <div className={classes.logo}>
            <img src={logoDark} alt="logo_light" />
          </div>

          {/* sidebarContent START */}
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
                <IconHideSideBar hideSideBar={hideSideBar} />
                <span className={classes.hide_sidebar}>hide sidebar</span>
              </span>
            </section>
            {/* controls end */}
          </section>
          {/* sidebarContent END */}
        </section>
        {/* sideBar END */}

        {/* showSideBar START */}
        <div className={classes.showSideBar}>
          <IconShowSideBar showSideBar={showSideBar} />
        </div>
        {/* showSideBar END */}
      </section>
      {/* body end */}
    </section>
  );
};

export default Home;
