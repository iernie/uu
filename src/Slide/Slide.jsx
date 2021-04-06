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
    <FocusLock disabled={!isEnabled} autoFocus={false} returnFocus={false}>
      <div aria-hidden={!isEnabled} className={styles.slide}>
        <div className={styles.slideContent}>{children}</div>
        {code && (
          <aside className={styles.slideCode} aria-hidden="true">
            <CodeBlock text={code} language="markup" theme={dracula} />
          </aside>
        )}
      </div>
    </FocusLock>
  );
};

export default Slide;
