import styles from "../reusedComponents/Shopping.module.css";

export default function Shopping({children}){
    return(
        <div className={styles.gridcontainer}>{children}</div>
    )
}