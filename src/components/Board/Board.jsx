import React, { useEffect, useRef } from "react";
import styles from "./Board.module.css";
import { Colors, figures } from "../../config";
import Boxes from "../Boxes/Boxes";
import { v4 as uuidv4 } from "uuid";
import Figure from "../Figure/Figure";

const Board = () => {
  const boardRef = useRef(null);

  const initBoxes = () => {
    const boxes = [];
    for (let y = 1; y <= 8; y++) {
      for (let x = 1; x <= 8; x++) {
        const uniqueKey = uuidv4();
        boxes.push(
          <Boxes
            color={(y + x) % 2 === 0 ? Colors.WHITE : Colors.BLACK}
            key={uniqueKey}
          />
        );
      }
    }
    return boxes;
  };

  const initFigures = () => {
    const figuresJSX = [];
    for (let item in figures) {
      figuresJSX.push(<Figure key={figures[item].id} figure={figures[item]} />);
    }
    return figuresJSX;
  };

  const resizeBoard = () => {
    const paddingsWidth = 48 + 12;
    const paddingHeight = 52 + 12;

    if (boardRef.current) {
      const board = boardRef.current;
      board.style.height = "";
      board.style.width = "";

      const boardRect = board.getBoundingClientRect();
      const boardWidth = boardRect.width - paddingsWidth + paddingHeight;
      const boardHeight = boardRect.height - paddingHeight + paddingsWidth;

      if (boardHeight > boardWidth) {
        board.style.height = boardWidth + "px";
      } else {
        board.style.width = boardHeight + "px";
      }
    }
  };

  useEffect(() => {
    resizeBoard();
    window.addEventListener("resize", resizeBoard);
  }, []);

  return (
    <div className={styles.boardWrapper} ref={boardRef}>
      <ul className={styles.boardLeft}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
          <li key={number} className={styles.boardLeftItem}>
            {number}
          </li>
        ))}
      </ul>

      <ul className={styles.boardBottom}>
        {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
          <li key={letter} className={styles.boardBottomItem}>
            {letter}
          </li>
        ))}
      </ul>

      <ul className={styles.boxes}>
        {initBoxes()}
        {initFigures()}
      </ul>
    </div>
  );
};

export default Board;
