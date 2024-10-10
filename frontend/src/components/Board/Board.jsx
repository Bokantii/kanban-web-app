import React from "react";
import classes from "./Board.module.scss";
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
import { ModalContext } from "../../store/modal-context";
import { useContext } from "react";
import AddNewTask from "../AddNewTask/AddNewTask";
import EditTask from "../EditTask/EditTask";
import EditBoard from "../EditBoard/EditBoard";
import DeleteTask from "../DeleteTask/DeleteTask";
import DeleteBoard from "../DeleteBoard/DeleteBoard";
import ViewTask from "../ViewTask/ViewTask";
import AddBoard from "../AddBoard/AddBoard";
import EmptyBoard from "../EmptyBoard/EmptyBoard";
import BoardTitle from "../BoardTitle/BoardTitle";
import { useRef } from "react";
const Board = ({ title }) => {
  // Variables
  const iconBoardColor = "#828FA3";
  const createBoardColor = "#635FC7";
  const boardTitle = useRef();
  // States
  const [numberOfBoards, setNumberOfBoards] = useState([]);
  const [sideBarIsHidden, setSideBarIsHidden] = useState(false);
  const [newColumIsCreated, setNewColumnIsCreated] = useState(false);
  const [menuIsShown, setMenuIsShown] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editBoardOpen, setEditBoardOpen] = useState(false);
  const [editTaskOpen, setEditTaskOpen] = useState(false);
  const [deleteTaskOpen, setDeleteTaskOpen] = useState(false);
  const [deleteBoardOpen, setDeleteBoardOpen] = useState(false);
  const [viewTaskOpen, setViewTaskOpen] = useState(false);
  const [addNewBoard, setAddNewBoard] = useState(false);
  const [boardName, setBoardName] = useState(null);
  const [boardTitleBg, setBoardTitleBg] = useState(null);
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(null);

  // Functions
  function openModal() {
    setModalIsOpen(true);
  }
  function editBoard() {
    setEditBoardOpen(true);
    console.log("Editing board");
  }
  function deleteBoard() {
    setDeleteBoardOpen(true);
    setMenuIsShown(false);
    console.log("Editing board");
  }
  function editTask() {
    setEditTaskOpen(true);
    console.log("Editing task");
  }
  function deleteTask() {
    setDeleteTaskOpen(true);
    console.log("Delete task");
  }
  function viewTask() {
    setViewTaskOpen(true);
  }
  function addBoard() {
    setAddNewBoard(true);
  }
  function createTheBoard(event) {
    event.preventDefault();
    const newBoardName = boardTitle.current.value;
    setBoardName(newBoardName);
    setNumberOfBoards([...numberOfBoards, newBoardName]);
    setAddNewBoard(false);
  }
  //Contexts
  const modalCtx = useContext(ModalContext);

  //Style and Class Valriables
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
  const boardContent = newColumIsCreated ? (
    columns
  ) : (
    <EmptyBoard createNewColumn={createNewColumn} />
  );
  const menuShownStatus = menuIsShown ? "block" : "none";
  const headerClassName = "header_";
  const boardClassName = "board_";
  //Functions 2
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
    <ModalContext.Provider value="none">
      {modalIsOpen && <AddNewTask />}
      {editBoardOpen && <EditBoard />}
      {deleteBoardOpen && <DeleteBoard />}
      {editTaskOpen && <EditTask />}
      {deleteTaskOpen && <DeleteTask />}
      {viewTaskOpen && <ViewTask />}
      {addNewBoard && (
        <AddBoard createTheBoard={createTheBoard} boardTitle={boardTitle} />
      )}
      <section className={`${classes[boardClassName]}`}>
        {/* header start */}
        <section className={`${classes[headerClassName]}`}>
          <div className={classes.logo}>
            <img src={logoDark} alt="logo_light" />
          </div>
          <div className={classes.header_text}>
            {" "}
            <span className={classes.platform_launch_text}>{boardName}</span>
            <div className={classes.header_text_right}>
              <button className={classes.add_new_tasks} onClick={openModal}>
                +add new task
              </button>
              <IconVerticalEllipses showBoardMenu={showBoardMenu} />
              <section
                className={classes.newBoard_menu}
                style={{ display: menuShownStatus }}
              >
                <div className={classes.newBoard_menu_content}>
                  <span className={classes.edit_board} onClick={deleteBoard}>
                    Edit Board
                  </span>
                  <span className={classes.delete_board} onClick={deleteBoard}>
                    Delete Board
                  </span>
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
                  all boards ({numberOfBoards.length})
                </span>
                <ul className={classes.boards}>
                  {numberOfBoards.map((title, index) => (
                    <BoardTitle
                      key={index}
                      title={title}
                      isSelected={selectedBoardIndex === index}
                      onSelect={() => {
                        setSelectedBoardIndex(index);
                      }}
                    />
                  ))}

                  <li
                    className={`${classes.board} ${classes.create_new_board}`}
                  >
                    <span className={classes.boardItem}>
                      <IconBoard fill={createBoardColor} />
                      <span onClick={addBoard} className={classes.newBoard}>
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
    </ModalContext.Provider>
  );
};

export default Board;
