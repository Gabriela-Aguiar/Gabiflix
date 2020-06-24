import React from 'react'
import './homepage.css'
import { Link } from 'react-router-dom'

function Homepage() {
    return (
        <div className="showcase">
            <div className="transparent">
                <div className="showcase-top">
                    <h1 className="showcase-title">GABIFLIX</h1>
                    <Link to="/login" className="btn btn-rounded link">Sign In</Link>
                </div>
                <div className="showcase-content">
                    <h1>See what's next</h1>
                    <p>Watch only with me. Can't never cancel it.</p>
                    <Link to="/login" className="btn btn-xl">
                        Watch Free forever <i className="fas fa-chevron-right btn-icon"/>
                    </Link>
                </div>
                <div className="showcase-bottom">
                <p>Made by Gabi. Only for Gabi and Harland</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;

