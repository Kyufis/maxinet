import React from "react";
import styles from "./scss/Page.module.scss"

function Audio() {

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1>Audio page</h1>
            </div>
            <div className={styles.content}>
                <p> Audio content </p>
            </div>
        </div>
    );
}

export default Audio;
