import React from "react";
import styles from "./Rating.module.css";

const Rating = (props) => {
    const stars = [];

    for (let i = 1; i <= props.maxRating; i++) {
        stars.push(
            <span
                key={i}
                className={
                    i <= props.rating ? styles.starFilled : styles.starEmpty
                }
            >
                &#9733;
            </span>
        );
    }

    return <div className={styles.rating}>{stars}</div>;
};

export default Rating;
