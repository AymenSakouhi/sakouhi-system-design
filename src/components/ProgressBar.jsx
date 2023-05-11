import styles from "./ProgressBar.module.css";

const ProgressBar = (props) => {
  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progress}
        style={{ width: `${props.progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
