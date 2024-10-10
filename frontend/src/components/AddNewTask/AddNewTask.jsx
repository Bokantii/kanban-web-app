import React from "react";
import classes from "./AddNewTask.module.scss";
import Modal from "../Modal/Modal";

const AddNewTask = () => {
  return (
    <Modal>
      <section className={classes.add_new_task}>NewTask</section>;
    </Modal>
  );
};

export default AddNewTask;
