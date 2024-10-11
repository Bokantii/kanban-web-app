import React, { useContext } from "react";
import classes from './BoardsAll.module.scss';
import { TranslateContext } from "../../store/boardTranslate-context";
import Board from "../Board/Board";

const BoardsAll = () => {
    const { boards, activeBoardIndex } = useContext(TranslateContext);

    return (
        <section className={classes.boardsAll}>
            {boards.map((board, index) => (
                <div
                    key={board.id}
                    className={classes.boardWrapper}
                    style={{
                        transform: `translateY(${(index - activeBoardIndex) * 100}%)`,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                    }}
                >
                    <Board title={board.title} columns={board.columns} />
                </div>
            ))}
        </section>
    );
};

export default BoardsAll;
