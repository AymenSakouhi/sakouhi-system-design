import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Datepicker.module.css";

const Datepicker = ({
    label,
    selectedDate,
    onChange,
    minDate,
    maxDate,
    disabled,
}) => {
    return (
        <div className={styles.datepickerWrapper}>
            <label className={styles.label}>{label}</label>
            <DatePicker
                selected={selectedDate}
                onChange={onChange}
                dateFormat="MM/dd/yyyy"
                minDate={minDate}
                maxDate={maxDate}
                disabled={disabled}
                className={styles.datepicker}
            />
        </div>
    );
};

export default Datepicker;
