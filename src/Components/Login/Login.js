import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div className="home-content">
            Login here <br></br><br></br><br></br>
            Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="email" /><br></br><br></br>
            Password: <input type="password" /><br></br><br></br><br></br>
            <Link className="btn" to={'/'} role="button">
                Back
                </Link>
            <a className="btn" >Submit</a>
        </div>
    )
}

