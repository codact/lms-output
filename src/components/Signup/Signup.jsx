import React from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {

    return (
        <div className="home-content">
            Signup here <br></br><br></br><br></br>
            Username: <input type="text" name="username" /><br></br><br></br>
            Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="email" /><br></br><br></br>
            Password: <input type="password" /><br></br><br></br><br></br>
            <Link className="btn" to={'/'} role="button">
                Back
                </Link>
            <a className="btn" >Submit</a>
        </div>
    )
}
