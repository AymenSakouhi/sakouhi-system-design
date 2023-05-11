import React from "react";
import styles from "./Tag.module.css";

const Tag = (props) => {
    return <span className={styles.tag}>{props.text}</span>;
};

export default Tag;
