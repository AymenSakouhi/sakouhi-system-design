import React, { useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.dropdown}>
            <button className={styles.toggleButton} onClick={toggleDropdown}>
                {props.title}
            </button>
            {isOpen && <div className={styles.content}>{props.children}</div>}
        </div>
    );
};

export default Dropdown;
