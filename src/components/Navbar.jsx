import React from "react";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                {props.items.map((item) => (
                    <li className={styles.navItem} key={item.id}>
                        <a href={item.url} className={styles.navLink}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
