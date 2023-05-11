import React from "react";
import styles from "./SubmitButton.module.css";

const SubmitButton = ({ label, onClick, disabled }) => {
    return (
        <button
            className={styles.submitButton}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default SubmitButton;
