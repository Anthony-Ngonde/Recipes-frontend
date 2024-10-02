import React, { useState } from "react";
import { Form, FormControl, FormGroup, FormLabel, Button } from "react-bootstrap";
import  { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'


const SignUpPage=()=>{
    const [username, setUsername]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [confirmPassword, setConfirmPassword]=useState('')

    const {register, watch, handleSubmit, formState:{errors}} = useForm();

    const submitForm=()=>{
        console.log("Form submitted");
        console.log(username)
        console.log(email)
        console.log(password)
        console.log(confirmPassword)

        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }


    return(
        <div className="container">
            <div className="form">
                <h1>Sign Up Page</h1>
                 <form>
                    <FormGroup>
                        <FormLabel>Username</FormLabel>
                        <FormControl type="text" placeholder="Your username"
                        {}
                        // value={username}
                        // name="username"
                        // onChange={(e)=>{setUsername(e.target.value)}}
                        />
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl type="email" placeholder="Your email"
                         value={email}
                        name="email"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" placeholder="Your password"
                         value={password}
                        name="password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl type="password" placeholder="Your password"
                         value={confirmPassword}
                        name="confirmPassword"
                        onChange={(e)=>{setConfirmPassword(e.target.value)}}
                        />
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <Button as="sub" variant="primary" onClick={submitForm}>SignUp</Button>
                    </FormGroup>
                    <FormGroup>
                        <small>Already have an account, <Link to='/login'>Log in</Link></small>
                    </FormGroup>
                    <br></br>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage