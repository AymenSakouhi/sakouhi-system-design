import React from "react";
import styles from "./Tooltip.module.css";

const Tooltip = (props) => {
    return (
        <span className={styles.tooltip}>
            {props.children}
            <span className={styles.tooltipText}>{props.text}</span>
        </span>
    );
};

export default Tooltip;
