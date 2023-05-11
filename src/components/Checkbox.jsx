import React from "react";
import styles from "./Checkbox.module.css";

const Checkbox = (props) => {
    return (
        <label className={styles.checkbox}>
            <input
                type="checkbox"
                checked={props.checked}
                onChange={props.onChange}
            />
            <span className={styles.checkmark} />
            {props.label}
        </label>
    );
};

export default Checkbox;
