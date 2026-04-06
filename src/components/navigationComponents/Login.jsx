import { useContext } from "react"
import { StylesContext } from "../../contexts/StylesContext"
import BlackButton from "../../reusedComponents/BlackButton"
import styles from "./Navigation.module.css"

export default function Login(){
    const { openPanel, closePanel, userCredentials, setUserCredentials } = useContext(StylesContext)
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.head}>
                <p>LOGIN</p>
                <button onClick={closePanel} className="cursor-pointer">&#x1D5B7;</button>
                </div>

                <div className={styles.form}>
                <form>
                    <input 
                        type="text" 
                        className={styles.input2} 
                        value={userCredentials.email}
                        onChange={(e) =>
                            setUserCredentials((prev) => ({
                            ...prev,
                            email: e.target.value
                            }))
                        }
                        placeholder="Username or email address *" 
                        required 
                    />
                    <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Password *</legend>
                    <input
                        type="password"
                        className={styles.passwordInput}
                        value={userCredentials.password}
                        onChange={(e) => 
                            setUserCredentials((prev) => ({
                                ...prev,
                                password: e.target.value
                            }))
                        }
                        placeholder="********"
                        required
                    />
                    </fieldset>
                </form>

                <div className={styles.rememberForgot}>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="Remember me"  />
                        <label htmlFor="Remember me">Remember me</label>
                    </div>
                    <p className="underline">Lost password?</p>
                </div>

                <BlackButton onClick={()=> {
                    setIsLoggedIn(true)
                    closePanel()
                    }}>LOG IN</BlackButton>

                <p className="text-xs">No account yet? <button onClick={() => openPanel("register")} className="underline cursor-pointer">Create Account</button></p>
                </div>
            </div>
        </div>
    )
}