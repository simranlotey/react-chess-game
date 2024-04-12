import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Boxes.module.css";
import { BoardLetter, Colors } from "../../config";

function Box(props) {

  return (
    <li
    onClick={() => props.cellClicked(BoardLetter[props.x], props.y)}
    id={`cell-${props.x}-${props.y}`}
      className={classNames(styles.box, {
        [styles.boxWhite]: props.color === Colors.WHITE,
        [styles.boxBlack]: props.color === Colors.BLACK,
        [styles.availableCell]:
          props.isAvailableForMove && !props.isHavingFigure,
        [styles.cellSelected]: props.isSelected,
      })}
    >
      <div
        className={classNames(styles.cellCircle, {
          [styles.cellCircleShow]:
            props.isAvailableForMove && !props.isHavingFigure,
        })}
      ></div>
    </li>
  );
}

Box.propTypes = {
  color: PropTypes.oneOf([Colors.WHITE, Colors.BLACK]),
  isSelected: PropTypes.bool,
  cellClicked: PropTypes.func,
  x: PropTypes.any,
  y: PropTypes.number,
  isAvailableForMove: PropTypes.bool,
  isHavingFigure: PropTypes.bool,
};

export default Box;
