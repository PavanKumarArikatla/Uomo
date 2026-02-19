import styles from "./BlackButton.module.css"

export default function BlackButton({children}){
    return(
        <button className={styles.button} type="submit">{children}</button>
    )
}