import React from "react";
import styles from "../Boxes/Boxes.module.css";
import { Colors } from "../../config";
import classNames from "classnames/bind";

const Box = (props) => {
  return (
    <li className={
      classNames(styles.box, {
        [styles.boxWhite]: props.color === Colors.WHITE,
        [styles.boxBlack]: props.color === Colors.BLACK,
      })
    }>
    </li>
  )
}

export default Box;
