import React, { useState, useContext, useRef } from "react";
import classes from "./Board.module.scss";
import logoDark from "../../assets/logo-dark.svg";
import IconVerticalEllipses from "../Icons/IconVerticalEllipses";
import AddNewTask from "../AddNewTask/AddNewTask";
import EditTask from "../EditTask/EditTask";
import EditBoard from "../EditBoard/EditBoard";
import DeleteTask from "../DeleteTask/DeleteTask";
import DeleteBoard from "../DeleteBoard/DeleteBoard";
import ViewTask from "../ViewTask/ViewTask";
import AddBoardModal from "../AddBoard/AddBoardModal";
import EmptyBoard from "../EmptyBoard/EmptyBoard";
import Column from "../Column/Column";
import { ModalContext } from "../../store/modal-context";
import { TranslateContext } from "../../store/boardTranslate-context";

const Board = ({ title, numColumns }) => {
  // States
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

  // Contexts
  const { boardTranslate } = useContext(TranslateContext);

  // References
  const boardTitle = useRef();
  const boardTranslateStyle = boardTranslate + "px";

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
    setAddNewBoard(false);
  }

  function createNewColumn() {
    setNewColumnIsCreated(true);
  }

  function showBoardMenu() {
    setMenuIsShown(!menuIsShown);
  }

  // Conditional Content
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

  const boardContent = newColumIsCreated ? columns : <EmptyBoard createNewColumn={createNewColumn} />;
  const menuShownStatus = menuIsShown ? "block" : "none";

  return (
    <ModalContext.Provider value="none">
      {modalIsOpen && <AddNewTask />}
      {editBoardOpen && <EditBoard />}
      {deleteBoardOpen && <DeleteBoard />}
      {editTaskOpen && <EditTask />}
      {deleteTaskOpen && <DeleteTask />}
      {viewTaskOpen && <ViewTask />}
      {addNewBoard && (
        <AddBoardModal createTheBoard={createTheBoard} boardTitle={boardTitle} />
      )}
      <section className={`${classes.board_}`} style={{ transform: `translateY(${boardTranslateStyle})` }}>
        {/* Header Start */}
        <section className={`${classes.header_}`}>
          <div className={classes.logo}>
            <img src={logoDark} alt="logo_light" />
          </div>
          <div className={classes.header_text}>
            <span className={classes.platform_launch_text}>{boardName}</span>
            <div className={classes.header_text_right}>
              <button className={classes.add_new_tasks} onClick={openModal}>
                +add new task
              </button>
              <IconVerticalEllipses showBoardMenu={showBoardMenu} />
              <section className={classes.newBoard_menu} style={{ display: menuShownStatus }}>
                <div className={classes.newBoard_menu_content}>
                  <span className={classes.edit_board} onClick={editBoard}>Edit Board</span>
                  <span className={classes.delete_board} onClick={deleteBoard}>Delete Board</span>
                </div>
              </section>
            </div>
          </div>
        </section>
        {/* Header End */}

        {/* Body Start */}
        <section className={classes.kanban_app_body}>
          <section className={classes.kanban_body_content}>
            {boardContent}
          </section>
        </section>
        {/* Body End */}
      </section>
    </ModalContext.Provider>
  );
};

export default Board;
