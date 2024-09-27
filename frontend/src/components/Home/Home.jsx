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
import Column from "../Column/Column";

const Board = () => {
  const iconBoardColor = "#828FA3";
  const createBoardColor = "#635FC7";

  function displayClickedMessage() {
    console.log("New Board Created");
  }

  const [numberOfBoards, setNumberOfBoards] = useState(3);
  const [sideBarIsHidden, setSideBarIsHidden] = useState(false);
  const [newColumIsCreated, setNewColumnIsCreated] = useState(false);
  const [menuIsShown, setMenuIsShown] = useState(false);

  const sideBarClass = sideBarIsHidden
    ? `${classes.side_bar} ${classes.side_bar_hidden}`
    : classes.side_bar;
  const bodyContentTranslateStyle = sideBarIsHidden ? 0 : "20.83%";
  const newColumnPrompt = (
    <section className={classes.new_column}>
      <span>The board is empty. Create a new column to get started</span>
      <button className={classes.add_new_column} onClick={createNewColumn}>
        + add new column
      </button>
    </section>
  );
  const columns = (
    <section className={classes.columns}>
      <Column />
      <Column />
      <Column />
      
      
      <div className={classes.create_new_column}>
        <span>+New Column</span>
      </div>
    </section>
  );
  const boardContent = newColumIsCreated ? columns : newColumnPrompt;
  const menuShownStatus = menuIsShown ? "block" : "none";
  function createNewColumn() {
    setNewColumnIsCreated(true);
  }
  function hideSideBar() {
    setSideBarIsHidden(true);
  }

  function showSideBar() {
    setSideBarIsHidden(false);
  }

  function showBoardMenu() {
    setMenuIsShown(!menuIsShown);
  }
  return (
    <section className={classes.board}>
      {/* header start */}
      <section className={classes.header}>
        <div className={classes.logo}>
          <img src={logoDark} alt="logo_light" />
        </div>
        <div className={classes.header_text}>
          {" "}
          <span className={classes.platform_launch_text}>Platform Launch</span>
          <div className={classes.header_text_right}>
            <button className={classes.add_new_tasks} disabled>
              +add new task
            </button>
            <IconVerticalEllipses showBoardMenu={showBoardMenu} />
            <section
              className={classes.newBoard_menu}
              style={{ display: menuShownStatus }}
            >
              <div className={classes.newBoard_menu_content}>
                <span className={classes.edit_board}>Edit Board</span>
                <span className={classes.delete_board}>Delete Board</span>
              </div>
            </section>
          </div>
        </div>
      </section>
      {/* header end */}

      {/* body start */}
      <section className={classes.kanban_app_body}>
        <section
          className={classes.kanban_body_content}
          style={{ transform: `translate(${bodyContentTranslateStyle})` }}
        >
          {boardContent}
        </section>
        {/* sideBar START */}
        <section className={sideBarClass}>
          <div className={classes.logo}>
            <img src={logoDark} alt="logo_light" />
          </div>

          {/* sidebarContent START */}
          <aside className={classes.side_bar_content}>
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
            </section>
            <span className={classes.sidebar_visibility}>
              <IconHideSideBar hideSideBar={hideSideBar} />
              <span className={classes.hide_sidebar}>hide sidebar</span>
            </span>
            {/* controls end */}
          </aside>
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

export default Board;
