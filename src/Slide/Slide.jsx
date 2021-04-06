import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import FocusLock from "react-focus-lock";
import styles from "./Slide.module.scss";

const Slide = ({ children, code, enabled = false }) => {
  const [isEnabled, setEnabled] = React.useState(enabled);
  React.useEffect(() => {
    if (!enabled) {
      setEnabled(false);
    } else {
      setTimeout(() => {
        setEnabled(true);
      }, 250);
    }
  }, [enabled]);
  return (
    <FocusLock
      disabled={!isEnabled}
      className={styles.slide}
      autoFocus={false}
      returnFocus={false}
    >
      <div className={styles.slideContent}>{children}</div>
      {code && (
        <aside className={styles.slideCode} aria-hidden="true">
          <CodeBlock text={code} language="markup" theme={dracula} />
        </aside>
      )}
    </FocusLock>
  );
};

export default Slide;
