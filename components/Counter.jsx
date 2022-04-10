import styles from "../styles/Counter.module.css"
export default function Counter(props){
    return (
        <div className={styles.container}>
            {props.number}
        </div>
    )
}