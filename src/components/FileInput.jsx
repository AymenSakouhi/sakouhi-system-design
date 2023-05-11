import React from "react";
import styles from "./FileInput.module.css";

const FileInput = ({ label, onChange, required, disabled }) => {
    return (
        <div className={styles.fileInputWrapper}>
            <label className={styles.label}>{label}</label>
            <input
                className={styles.fileInput}
                type="file"
                onChange={onChange}
                required={required}
                disabled={disabled}
            />
        </div>
    );
};

export default FileInput;
