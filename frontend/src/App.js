import Board from "./components/Home/Home";
import { useState, useRef } from "react";
function App() {
  const [enteredBoardName, setEnteredBoardName] = useState("");
  const [enteredTaskName, setEnteredTaskName] = useState("");
  // const [newBoardCreated, setNewBoardCreated] = useState(false);
  // const [newTaskCreated, setNewTaskCreated] = useState(false);
  const boardName = useRef();
  const boardInput = <input ref={boardName} />;
  const addBoard = (
    <button className="addBoard" onClick={handleClick}>
      Create New Board
    </button>
  );
  // const boardTitle = newBoardCreated ? enteredBoardName : "";
  // const boardTitle = enteredBoardName ? enteredBoardName : "";
  const boardTitle =  enteredBoardName ?? "";

  // function handleChange(event) {
  //   // setNewTaskCreated(false);
  //   setEnteredBoardName(event.target.value);
  // }
  function handleClick() {
    setEnteredBoardName(boardName.current.value);
  }
  return (
    <>
      <Board />
    </>
  );
}

export default App;
