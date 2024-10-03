import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth";


const LoggedinHome=()=>{
    const [recipes, setRecipes] = useState([])

    useEffect(
        ()=>{
            fetch('/recipe/recipes')
            .then(res=>res.json())
            .then(data=>console.log(data))
            .catch(err=>console.log(err))
        },[]
    );



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

    const [logged] = useAuth()


    return(
        <div>
            {logged?<LoggedinHome/>:<LoggedOutHome/>}
        </div>
       
    )
}

export default HomePage