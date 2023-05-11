import React, { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <button className={styles.toggleButton} onClick={toggleAccordion}>
        {props.title}
      </button>
      {isOpen && <div className={styles.content}>{props.children}</div>}
    </div>
  );
};

export default Accordion;
