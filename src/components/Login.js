import React, { useState } from "react";
import { Form, FormControl, FormGroup, FormLabel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginPage=()=>{

    const {register, handleSubmit, watch, reset, formState:{errors}} = useForm()

    // console.log(watch('username'))
    // console.log(watch('password'))


    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')

    const loginUser=(data)=>{
        console.log(data)

        const requestOptions={
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        }

        fetch('/auth/login', requestOptions)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })


        reset()
    }

   


    return(
        <div className="container">
            <div className="form">
                <h1>Login Page</h1>
                 <form>
                    <FormGroup>
                        <FormLabel>Username</FormLabel>
                        <FormControl type="text" placeholder="Your username"
                         {...register("username", { required: true, maxLength: 25 })}
                        />
                    </FormGroup>
                    {errors.username && <p style={{ color: "red" }}><small>Username is required</small></p>}
                    {errors.username?.type === "maxLength" && <p style={{ color: "red" }}><small>Max characters should be 25</small></p>}
                    <br></br>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" placeholder="Your password"
                        {...register("password", { required: true, minLength: 8 })}
                        />
                    </FormGroup>
                    {errors.password && <p style={{ color: "red" }}><small>Password is required</small></p>}
                    {errors.password?.type === "minLength" && <p style={{ color: "red" }}><small>Password should be more than 8 characters</small></p>}
                    <br></br>
                    <FormGroup>
                    <Button as="sub" variant="primary" onClick={handleSubmit(loginUser)}>
                            Log in
                        </Button>
                    </FormGroup>
                    <FormGroup>
                        <small>Do not have an account? <Link to='/signup'>Create One</Link></small>
                    </FormGroup>
                    <br></br>
                </form>
            </div>
        </div>
    )
}

export default LoginPage