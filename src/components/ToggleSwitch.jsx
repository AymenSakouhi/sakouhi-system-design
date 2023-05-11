import React from "react";
import styles from "./ToggleSwitch.module.css";

const ToggleSwitch = (props) => {
    return (
        <label className={styles.switch}>
            <input
                type="checkbox"
                checked={props.checked}
                onChange={props.onChange}
            />
            <span className={styles.slider} />
        </label>
    );
};

export default ToggleSwitch;
