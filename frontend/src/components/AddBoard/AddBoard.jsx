import React from "react";
import Modal from "../Modal/Modal";
import classes from "./AddBoard.module.scss";
import { useState } from "react";
import { useRef } from "react";
import { useContext } from "react";
const AddBoard = ({createTheBoard,boardTitle}) => {
  // const boardTitle= useRef()
    const [newColumnAdded,setNewColumnAdded] = useState(false);
    const [boardName,setBoardName] = useState(null)
    function addColumn(event){
        event.preventDefault()
        setNewColumnAdded(true);
    }
    // function boardTitleUpdate(){
    //   boardName = boardTitle.current.value
    // }
  
  return (
    
    <Modal>
      {" "}
      <section className={classes.add_board}>
        <form>
          <h1>Add New Board</h1>
          <section className={classes.name}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref={boardTitle}/>
          </section>
          <button onClick={addColumn} className={classes.add_new_column}>+Add New Column</button>
          <button onClick={createTheBoard} className={classes.add_new_board}>Create New Board</button>
          {newColumnAdded && <h1>New Column Added</h1>}
        </form>
      </section>
    </Modal>
  );
};

export default AddBoard;
