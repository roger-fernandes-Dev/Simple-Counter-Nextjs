import Counter from "./Counter";
import styles from "../styles/Layout.module.css"
import { useState } from "react";

export default function Layout(){

    const [number, setNumber] = useState(0)

    return (
        <div className={styles.container}>
            <h1>Simple Counter</h1>
            <h4>Simple Counter - use State</h4>
            <Counter number={number} />

            <di className={styles.containerButton}>
                <button onClick={()=>{setNumber(number-1)}} className={styles.button}>-</button>
                <button onClick={()=>{setNumber(number+1)}} className={styles.button}>+</button>
            </di>
        </div>
    )
}