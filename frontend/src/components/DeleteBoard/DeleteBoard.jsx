import React from "react";
import classes from "./DeleteBoard.module.scss";
import Modal from "../Modal/Modal";
const DeleteBoard = () => {
  return (
    <Modal>
      <section className={classes.delete_board}>DeleteBoard</section>
    </Modal>
  );
};

export default DeleteBoard;
