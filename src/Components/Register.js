import React from 'react'
import './SignIn.css'
import { Link } from "react-router-dom";
import Navbar from './Navbar';


export default function Register(){
    return(
        <form className="form-background">
        <Navbar/>
            <div className="form-container">
                <h1> Sign up here! </h1>
                <div className="form-label">
                <label>
                    Username: 
                    <input type="text" name="username" /> 
                </label>
                <label>
                    Email:
                    <input type="text" name="email" /> 
                </label> 
                <label>
                    Password: 
                    <input type="password" name="password" /> 
                </label> 
                </div> 
                <button className="form-submit">Register now</button>
                <div className="form-Register"><h6><Link to="./signin">Already have an account? Sign in now</Link></h6></div>
                </div>
                </form>
                // </div>
                    )
                }