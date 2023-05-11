import React from "react";
import styles from "./Textarea.module.css";

const Textarea = ({
    label,
    value,
    onChange,
    required,
    disabled,
    placeholder,
}) => {
    return (
        <div className={styles.textareaWrapper}>
            <label className={styles.label}>{label}</label>
            <textarea
                className={styles.textarea}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Textarea;
