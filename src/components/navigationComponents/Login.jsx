import { useContext } from "react"
import { StylesContext } from "../../contexts/StylesContext"
import BlackButton from "../../reusedComponents/BlackButton"
import styles from "./LoginRegister.module.css"

export default function Login(){
    const { handleRegister, closeLoginRegister } = useContext(StylesContext)
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.head}>
                <p>LOGIN</p>
                <button onClick={closeLoginRegister} className="cursor-pointer">&#x1D5B7;</button>
                </div>

                <div className={styles.form}>
                <form>
                    <input type="text" className={styles.input} placeholder="Username or email address *" required /><br />
                    <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Password *</legend>
                    <input
                        type="password"
                        className={styles.input2}
                        placeholder="********"
                        required
                    />
                    </fieldset>
                </form>

                <div className={styles.rememberForgot}>
                    <div className="flex items-center gap-2">
                    <input type="checkbox" id="Remember me" />
                    <label for="Remember me">Remember me</label>
                    </div>
                    <p className="underline">Lost password?</p>
                </div>

                <BlackButton>LOG IN</BlackButton>

                <p className="text-xs">No account yet? <button onClick={handleRegister} className="underline cursor-pointer">Create Account</button></p>
                </div>
            </div>
        </div>
    )
}