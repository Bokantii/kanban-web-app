import React from "react";
import classes from "./DeleteTask.module.scss";
import Modal from "../Modal/Modal";
const DeleteTask = () => {
  return (
    <Modal>
      <section className={classes.delete_task}>DeleteTask</section>
    </Modal>
  );
};

export default DeleteTask;
