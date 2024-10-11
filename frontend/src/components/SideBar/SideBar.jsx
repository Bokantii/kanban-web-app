import React, { useState, useRef, useContext } from "react";
import classes from "./SideBar.module.scss";
import IconLightTheme from "../Icons/IconLightTheme/IconLightTheme";
import IconDarkTheme from "../Icons/IconDarkTheme/IconDarkTheme";
import IconHideSideBar from "../Icons/IconHideSideBar";
import IconBoard from "../Icons/IconBoard";
import BoardTitle from "../BoardTitle/BoardTitle";
import logoDark from "../../assets/logo-dark.svg";
import IconShowSideBar from "../Icons/IconShowSideBar";
import AddBoardModal from "../AddBoard/AddBoardModal";
import { TranslateContext } from "../../store/boardTranslate-context";

const SideBar = () => {
    const [sideBarIsHidden, setSideBarIsHidden] = useState(false);
    const [addNewBoard, setAddNewBoard] = useState(false);
    const [selectedBoardIndex, setSelectedBoardIndex] = useState(null);

    const boardTitleInput = useRef();

    const { createNewBoard, selectBoard, boards } = useContext(TranslateContext);

    const sideBarClass = sideBarIsHidden
        ? `${classes.side_bar} ${classes.side_bar_hidden}`
        : classes.side_bar;

    function hideSideBar() {
        setSideBarIsHidden(true);
    }

    function showSideBar() {
        setSideBarIsHidden(false);
    }

    function addBoard() {
        setAddNewBoard(true);
    }

    function createTheBoard(event) {
        event.preventDefault();
        const newBoardTitle = boardTitleInput.current.value;
        if (newBoardTitle) {
            createNewBoard(newBoardTitle);
            setAddNewBoard(false);
        }
    }

    return (
        <>
            {addNewBoard && (
                <AddBoardModal
                    createTheBoard={createTheBoard}
                    boardTitle={boardTitleInput}
                />
            )}
            <section className={sideBarClass}>
                <div className={classes.logo}>
                    <img src={logoDark} alt="logo_light" />
                </div>
                <aside className={classes.side_bar_content}>
                    <section className={classes.all_boards}>
                        <span className={classes.all_boards_heading}>
                            ALL BOARDS ({boards.length})
                        </span>
                        <ul className={classes.boards}>
                            {boards.map((board, index) => (
                                <BoardTitle
                                    key={board.id}
                                    title={board.title}
                                    isSelected={index === selectedBoardIndex}
                                    onSelect={() => {
                                        setSelectedBoardIndex(index);
                                        selectBoard(index);
                                    }}
                                />
                            ))}
                            <li className={`${classes.board} ${classes.create_new_board}`} onClick={addBoard}>
                                <span className={classes.boardItem}>
                                    <IconBoard fill="#635FC7" />
                                    <span className={classes.newBoard}>
                                        +Create New Board
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </section>
                    <section className={classes.controls}>
                        <section className={classes.screen_mode}>
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
                </aside>
            </section>
            <div className={classes.showSideBar}>
                <IconShowSideBar showSideBar={showSideBar} />
            </div>
        </>
    );
};

export default SideBar;
