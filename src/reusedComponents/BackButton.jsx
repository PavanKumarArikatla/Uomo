import { useNavigate } from "react-router-dom"
import styles from "./BackButton.module.css"


export default function BackButton(){
    const navigate = useNavigate()
    const handleBack = () => { navigate(-1) }
    
    return <button className={styles.backbtn} onClick={handleBack}>&larr;</button>
}