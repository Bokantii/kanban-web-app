import React from "react";
import classes from "./Column.module.scss";
import Card from "../Card/Card";
const Column = ({ numberOfCards }) => {
  return (
    <section className={classes.column}>
      <p>Todo(3)</p>
      <section className={classes.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </section>
  );
};

export default Column;
