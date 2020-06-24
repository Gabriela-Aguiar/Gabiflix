import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="showcase">
            <h1 className="login-title">GABIFLIX</h1>
            <div className="transparent login">
                <div className="container">
                    <h1>Login</h1>
                    <form className="form">
                        <input type="text" name="name" id="name" placeholder="Name"/>
                        <input type="password" name="password" id="password" placeholder="Password"/>
                        <Link to="/login" className="login-btn">Login</Link>
                    </form>
                    <p>Made by Gabi. Only for Gabi and Harland</p>
                </div>
            </div>
        </div>
    )
}

export default Login;
