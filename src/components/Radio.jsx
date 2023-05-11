import React from "react";
import styles from "./Radio.module.css";

const Radio = ({ label, options, value, onChange, required, disabled }) => {
    return (
        <div className={styles.radioWrapper}>
            <label className={styles.label}>{label}</label>
            {options.map((option) => (
                <div key={option.value} className={styles.radioOption}>
                    <input
                        type="radio"
                        id={option.value}
                        name={label}
                        value={option.value}
                        checked={value === option.value}
                        onChange={onChange}
                        required={required}
                        disabled={disabled}
                    />
                    <label htmlFor={option.value}>{option.label}</label>
                </div>
            ))}
        </div>
    );
};

export default Radio;
