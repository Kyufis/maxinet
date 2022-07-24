import React from "react";
import {useState} from "react";
import styles from "./scss/Page.module.scss"

interface Counter {
    count: number | null;
}

function Home() {

    const [count, setCount] = useState<Counter | null>({count: 0});

    function counterClicked() {
        if (count?.count != null) setCount({count: count!.count + 1});
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1>Home page</h1>
            </div>
            <div className={styles.content}>
                <p> Description hehe present here </p>
                <div> Counter equal to {"-->"} <span className={styles.counter}>{count!.count}</span> </div>
                <button onClick={counterClicked}> Add +1 to counter</button>
            </div>
        </div>
    );
}

export default Home;
