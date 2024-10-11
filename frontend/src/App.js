// import Boards from "./components/Board/Board";
import BoardsAll from "./components/BoardsAll/BoardsAll";
import { useState, useRef } from "react";
import Modal from "./components/Modal/Modal";
import { ModalContext } from "./store/modal-context";
import SideBar from "./components/SideBar/SideBar";
import { useContext } from "react";
import { TranslateContext } from "./store/boardTranslate-context";
function App() {
  const [enteredBoardName, setEnteredBoardName] = useState("");
  const [enteredTaskName, setEnteredTaskName] = useState("");
  const [boardTranslate, setBoardTranslate] = useState(0);
  const [boards, setBoards] = useState([
    { id: 0, title: "Initial Board", columns: [] },
  ]);
  const [activeBoardIndex, setActiveBoardIndex] = useState(0);

  const createNewBoard = (title) => {
    const newBoard = { id: 0, title, columns: [] };
    setBoards([...boards, newBoard]);
    setActiveBoardIndex(boards.length);
  };
  function selectBoard(index) {
    setActiveBoardIndex(index);
  }

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
      
        <TranslateContext.Provider
          value={{ createNewBoard, selectBoard, activeBoardIndex, boards }}
        >
          <BoardsAll />
          <SideBar />
        </TranslateContext.Provider>
     
    </>
  );
}

export default App;
