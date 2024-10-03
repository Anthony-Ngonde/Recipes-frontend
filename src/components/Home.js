import React from "react";
import { Link } from "react-router-dom";


const LoggedinHome=()=>{
    return(
        <div className="recipes">
            <h1>List of Recipes</h1>
        </div>
    )
}

const LoggedOutHome=()=>{
    return(
        <div className="home container">
        <h1 className="heading">Welcome to the Recipes</h1>
        <Link to='/signup' className="btn btn-primary btn-lg">Get Started</Link>
    </div>
    )
}

const HomePage=()=>{
    return(
       {}
    )
}

export default HomePage