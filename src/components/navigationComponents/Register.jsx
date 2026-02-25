import { useContext } from "react"
import { StylesContext } from "../../contexts/StylesContext"
import BlackButton from "../../reusedComponents/BlackButton"
import styles from "./Navigation.module.css"

export default function Register(){
    const { closeButton } = useContext(StylesContext)
    return(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.head}>
                <p>CREATE AN ACCOUNT</p>
                <button onClick={closeButton} className="cursor-pointer">&#x1D5B7;</button>
                </div>

                <div className={styles.form}>
                <form>
                    <input type="text" className={styles.input2} placeholder="Username" required /><br></br><br></br>
                    <input type="text" className={styles.input2} placeholder="Email address *" required /><br></br><br></br>
                    <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Password *</legend>
                    <input
                        type="password"
                        className={styles.passwordInput}
                        placeholder="********"
                        required
                    />
                    </fieldset>
                </form>

                <p className="text-xs text-left text-gray-400 font-courier">Your personal data will be used to support your experience throught this website, to manage access to your account, and for other purposes described in our privacy policy.</p>

                <BlackButton>REGISTER</BlackButton>

                </div>
            </div>
        </div>
    )
}
