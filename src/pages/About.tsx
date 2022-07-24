import React from "react";
import styles from "./scss/Page.module.scss"

function About() {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1>About page</h1>
            </div>
            <div className={styles.content}>
                <p> Some description right there </p>
            </div>
        </div>
    );
}

export default About;
