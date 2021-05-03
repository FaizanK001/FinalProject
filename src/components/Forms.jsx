import React from 'react'
import '../assets/CSS/Signin.css'
export default function Forms(props) {
    const{
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handlesignup,
        hasAccount,
        setHasAccount,
        emailerror,
        passworderror

    } = props;
    return (
        <>
            <section className="login">
                <div className="loginContainer">
                    <label>Username</label>
                    <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <p className="errorMsg">{emailerror}</p>
                    <label >Password</label>
                    <input type="password" required value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <p className="errorMsg">{passworderror}</p>
                    <div className="btnContainer">
                        {hasAccount ? (
                            <>
                            <button onClick={handleLogin}>Sign in</button>
                            <p>Don't have an account <span onClick={()=> setHasAccount(!hasAccount)}>Sign up</span></p>
                            </>
                        ):(
                            <>
                            <button onClick={handlesignup}>Sign up</button>
                            <p>Have an account? <span onClick={()=> setHasAccount(!hasAccount)}>Sign in</span></p>
                            </>

                        )}

                    </div>
                </div>

            </section>
        </>
    )
}
