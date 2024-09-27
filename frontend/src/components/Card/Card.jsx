import React from "react";
import classes from "./Card.module.scss";
const Card = ({
  task,
  totalSubTasks,
  subTasksComplete,
  taskStatus,
  numberOfTasks,
}) => {
  return (
    <section className={classes.card}>
      <p>Build UI for onboarding flow</p>
      <p>0 of 6 subtasks</p>
    </section>
  );
};

export default Card;
