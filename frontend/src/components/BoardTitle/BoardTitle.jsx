import React from "react";
import classes from "./BoardTitle.module.scss";
import IconBoard from "../Icons/IconBoard";
import { useState } from "react";
const BoardTitle = ({ title,isSelected,onSelect}) => {
  
  let iconBoardColor = isSelected ? "#f4f7fd" :"#828FA3";
  const className = isSelected
    ? `${classes.board} ${classes.board_selected}`
    : classes.board;
  function changeIconColor(){
    iconBoardColor="#828FA3"
  }
  return (
    <li className={className} onClick={onSelect}>
      <span className={classes.boardItem}>
        <IconBoard fill={iconBoardColor} />
        <span>{title}</span>
      </span>
    </li>
  );
};

export default BoardTitle;
