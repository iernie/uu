import styles from "./Slide.module.scss";

const Slide = ({ title, children, className = "" }) => {
  return (
    <div className={styles.slide}>
      <div className={className}>
        {title && <h1 tabIndex={0}>{title}</h1>}
        {children}
      </div>
    </div>
  );
};

export default Slide;
