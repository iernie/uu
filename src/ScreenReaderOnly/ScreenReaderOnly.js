import { createElement } from "react";
import styles from "./ScreenReaderOnly.module.scss";

const ScreenReaderOnly = ({ children, ...props }) => {
  return createElement("span", {
    ...props,
    className: styles.screenReaderOnly,
    children,
  });
};

export default ScreenReaderOnly;
