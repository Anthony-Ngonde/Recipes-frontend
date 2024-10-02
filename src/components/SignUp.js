import React, { useState } from "react";
import { Form, FormControl, FormGroup, FormLabel, Button } from "react-bootstrap";
import  { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'


const SignUpPage=()=>{

    const { register, watch, handleSubmit, reset, formState:{ errors } } = useForm();

    const submitForm = (data)=>{

        console.log(data)

        reset()

    }

    console.log(watch("username"));
    console.log(watch("email"));
    console.log(watch("password"));
    console.log(watch("confirmPassword"));
    


    return(
        <div className="container">
            <div className="form">
                <h1>Sign Up Page</h1>
                 <form>
                    <FormGroup>
                        <FormLabel>Username</FormLabel>
                        <FormControl type="text" placeholder="Your username"
                        {...register("username",  {required:true,maxLength:25})}
                        // value={username}
                        // name="username"
                        // onChange={(e)=>{setUsername(e.target.value)}}
                        />
                        <br></br>
                         {errors.username && <p style={{color:"red"}}><small>Username is required</small></p>}
                    </FormGroup>
                     <br></br>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl type="email" placeholder="Your email"
                        {...register("email",  {required:true,maxLength:80})}
                        //  value={email}
                        // name="email"
                        // onChange={(e)=>{setEmail(e.target.value)}}
                        />
                        <br></br>
                        {errors.email && <p style={{color:"red"}}><small>Email is required</small></p>}
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" placeholder="Your password"
                        {...register("password",  {required:true,minLength:8})}
                        //  value={password}
                        // name="password"
                        // onChange={(e)=>{setPassword(e.target.value)}}
                        />
                        <br></br>
                        {errors.password && <p style={{color:"red"}}><small>Password is required</small></p>}
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl type="password" placeholder="Your password"
                        {...register("confirmPassword",  {required:true,minLength:25})}
                        //  value={confirmPassword}
                        // name="confirmPassword"
                        // onChange={(e)=>{setConfirmPassword(e.target.value)}}
                        />
                        <br></br>
                        {errors.confirmPassword && <p style={{color:"red"}}><small>Confirm Password is required</small></p>}
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <Button as="sub" variant="primary" onClick={handleSubmit(submitForm)}>SignUp</Button>
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