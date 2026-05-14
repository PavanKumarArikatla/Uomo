import { useContext, useState } from "react"
import { StylesContext } from "../../contexts/StylesContext"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import BlackButton from "../../reusedComponents/BlackButton"
import styles from "./Navigation.module.css"

export default function Login(){
    const { openPanel, closePanel, users, currentUser, setCurrentUser, setAppLoading, setError, error } = useContext(StylesContext)
    const [userCredentials, setUserCredentials] = useState({email: "", password: ""});
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)

    function handleLogin(){
        setAppLoading()
        const loggedInUser = users.find(user => 
            user.email === userCredentials.email && user.password === userCredentials.password)

        if(loggedInUser){
            if(rememberMe){
                localStorage.setItem("user", JSON.stringify(loggedInUser));
            } else {
                localStorage.removeItem("user");
            }
            setError("");  
            closePanel();
            setCurrentUser(loggedInUser)
        } else {
            setError("Invalid credentials")
        }
    }
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
                        type="email" 
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
                        <div className={styles.passwordWrapper}>
                            <input
                                type={showPassword ? "text" : "password"}
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

                            <button
                                type="button"
                                className={styles.eyeButton}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </fieldset>
                </form>

                <div className={styles.rememberForgot}>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="remember" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <button onClick={() => openPanel("forgotPassword")} className="underline cursor-pointer">Lost password?</button>
                </div>

                <p className="text-red-500">{ error !== "" && error}</p>
                <BlackButton onClick={handleLogin}>LOG IN</BlackButton>

                <p className="text-xs">No account yet? <button onClick={() => openPanel("register")} className="underline cursor-pointer">Create Account</button></p>
                </div>
            </div>
        </div>
    )
}
