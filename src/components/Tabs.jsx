import React, { useState } from "react";
import styles from "./Tabs.module.css";

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className={styles.tabs}>
            <ul className={styles.tabList}>
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={`${styles.tabItem} ${
                            index === activeTab ? styles.active : ""
                        }`}
                    >
                        <button
                            className={styles.tabButton}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab.title}
                        </button>
                    </li>
                ))}
            </ul>
            <div className={styles.tabContent}>{tabs[activeTab].content}</div>
        </div>
    );
};

export default Tabs;
