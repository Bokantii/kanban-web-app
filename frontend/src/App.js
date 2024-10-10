import Boards from "./components/Board/Board";
import { useState, useRef } from "react";
import Modal from "./components/Modal/Modal";
import { ModalContext } from "./store/modal-context";
import { useContext } from "react";
function App() {
  const [enteredBoardName, setEnteredBoardName] = useState("");
  const [enteredTaskName, setEnteredTaskName] = useState("");
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [newBoardCreated, setNewBoardCreated] = useState(false);
  // const [newTaskCreated, setNewTaskCreated] = useState(false);
  const boardName = useRef();
  const boardInput = <input ref={boardName} />;
  const addBoard = (
    <button className="addBoard" onClick={handleClick}>
      Create New Board
    </button>
  );
 
  const boardTitle = enteredBoardName ?? "";
  const modalCtx = useContext(ModalContext);

  function handleClick() {
    setEnteredBoardName(boardName.current.value);
  }

  return (
    <>
      <ModalContext.Provider value={modalCtx}>
        <Boards />
      </ModalContext.Provider>
    </>
  );
}

export default App;
