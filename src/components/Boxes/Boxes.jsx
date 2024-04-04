import React from "react";
import PropTypes from "prop-types";
import styles from "../Boxes/Boxes.module.css";
import { Colors } from "../../config";
import classNames from "classnames/bind";

const Box = (props) => {
  return (
    <li
      className={classNames(styles.box, {
        [styles.boxWhite]: props.color === Colors.WHITE,
        [styles.boxBlack]: props.color === Colors.BLACK,
      })}
    ></li>
  );
};

Box.propTypes = {
  color: PropTypes.oneOf([Colors.WHITE, Colors.BLACK]).isRequired,
};

export default Box;
