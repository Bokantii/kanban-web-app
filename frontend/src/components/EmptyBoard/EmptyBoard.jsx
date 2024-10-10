import React from "react";
import classes from './EmptyBoard.module.scss';
const EmptyBoard = ({createNewColumn}) => {
  return (
    <section className={classes.new_column}>
      <span>The board is empty. Create a new column to get started</span>
      <button className={classes.add_new_column} onClick={createNewColumn}>
        + add new column
      </button>
    </section>
  );
};

export default EmptyBoard;
