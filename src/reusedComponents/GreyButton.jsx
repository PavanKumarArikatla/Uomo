import styles from "./GreyButton.module.css"

export default function GreyButton({children}){
    return(
        <button className={styles.button} type="submit">{children}</button>
    )
}