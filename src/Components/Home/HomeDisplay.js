import React from 'react'
import { Link } from 'react-router-dom'

export const HomeDisplay = () => {
    return (
        <div className="home-content">
            <h1>Store Manager</h1>
            <Link className="btn" to={'/login'} role="button">
                Login
                </Link>
            <Link className="btn" to={'/signup'} role="button">
                Signup
                </Link>
        </div>
    )
}

