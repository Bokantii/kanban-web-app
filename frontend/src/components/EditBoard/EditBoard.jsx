import React from "react";
import classes from "./EditBoard.module.scss";
import Modal from "../Modal/Modal";
const EditBoard = () => {
  return (
    <Modal>
      <section className={classes.edit_board}>EditBoard</section>
    </Modal>
  );
};

export default EditBoard;
